import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import shortid from 'shortid';
import _ from 'lodash';

const useStyles = makeStyles({
  root: {
    padding: '2em',
    flexGrow: 1,
    maxWidth: 400,
  },
});

const renderTreeItem = items => {
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
          {renderTreeItem(items[label])}
        </TreeItem>
      );
    }

    return (
      <TreeItem
        onClick={() => console.log(items.path + '/' + itemKey)}
        key={uniqueKey}
        nodeId={uniqueKey}
        label={itemKey}
      />
    );
  });

  return result;
};

export const TreeViewComponent = () => {
  const classes = useStyles();

  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    if (files.length === 0) {
      fetch('http://localhost:5000/api/files/react-course')
        .then(res => res.json())
        .then(setFiles)
        .catch(err => console.log(err));
    }
  }, [files]);

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTreeItem(files)}
    </TreeView>
  );
};
