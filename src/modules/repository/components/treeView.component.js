import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import shortid from 'shortid';
import _ from 'lodash';

// import { EMPTY_ARRAY } from '../../../constants/emptyPrimitives.constants';
import { SET_PATH } from '../../inject/inject.actions';
import { useRepositoryState, useRepositoryDispatch } from '../repository.context';
import { setFiles } from '../repository.actions';

const useStyles = makeStyles({
  root: {
    padding: '2em',
    maxWidth: 400,
  },
});

const renderTreeItem = (items, setPath) => {
  const result = Object.keys(items).map(itemKey => {
    setTimeout(_.noop);
    const uniqueKey = shortid.generate();

    if (itemKey === 'label' || itemKey === 'path') {
      return <React.Fragment key={uniqueKey}></React.Fragment>;
    }

    const label = _.get(items, `${itemKey}.label`, null);

    if (typeof items[label] === 'object') {
      return (
        <TreeItem key={uniqueKey} nodeId={uniqueKey} label={label}>
          {renderTreeItem(items[label], setPath)}
        </TreeItem>
      );
    }

    return (
      <TreeItem
        onClick={() => setPath(items.path + '/' + itemKey)}
        key={uniqueKey}
        nodeId={uniqueKey}
        label={itemKey}
      />
    );
  });

  return result;
};

export const TreeViewComponent = ({ dispatch }) => {
  const classes = useStyles();
  const { files, repository } = useRepositoryState();
  const repositoryDispatch = useRepositoryDispatch();

  const dispatchSetPath = path => dispatch({ type: SET_PATH, path });

  React.useEffect(() => {
    repositoryDispatch(setFiles(files, repository));
  }, [files, repository, repositoryDispatch]);

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTreeItem(files, dispatchSetPath)}
    </TreeView>
  );
};
