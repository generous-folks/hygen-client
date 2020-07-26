import React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/styles';
import { EMPTY_OBJECT, EMPTY_STRING } from '../../../constants/emptyPrimitives.constants';

const useStyles = makeStyles({
  paper: {
    overflow: 'auto',
    padding: '30px',
  },
  line: {
    height: '18px',
    padding: 0,
  },
  lineText: {
    whiteSpace: 'pre',
  },
  lineNumber: {
    width: '30px',
    marginRight: '5px',
    padding: '0 12px',
    background: 'lightgrey',
    userSelect: 'none',
  },
});

const Line = ({ text, lineIndex }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.line}>
      <span className={classes.lineNumber}>{lineIndex}</span>
      <ListItemText className={classes.lineText} primary={text} />
    </ListItem>
  );
};

const getPreviewFile = ({ to, after, template, skip_if, before } = EMPTY_OBJECT) => [
  '---',
  `to: ${to || null}`,
  'isInject: true',
  `skip_if: ${skip_if || null}`,
  `after: ${after || null}`,
  `before: ${before || null}`,
  '---',
  template || EMPTY_STRING,
];

export const InjectFileView = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List>
        {getPreviewFile(props).map((line, index) => (
          <Line key={`line-${index}`} lineIndex={index + 1} text={`${line}`} />
        ))}
      </List>
      <Button variant="contained" color="primary">
        Generate template
      </Button>
    </Paper>
  );
};
