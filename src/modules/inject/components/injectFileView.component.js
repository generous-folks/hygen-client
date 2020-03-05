/* eslint-disable react/prop-types */
import React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core';

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
    width: '20px',
    marginRight: '5px',
    background: 'lightgrey',
    userSelect: 'none',
  },
});

const Line = ({ text, n }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.line}>
      <span className={classes.lineNumber}>{n}</span>
      <ListItemText className={classes.lineText} primary={text} />
    </ListItem>
  );
};

const getPreviewFile = ({ to, after, template, before } = {}) => [
  '---',
  `to: ${to}`,
  'isInject: true',
  `after: ${after}`,
  `before: ${before}`,
  '---',
  template,
];

export const InjectFileView = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List>
        {getPreviewFile(props).map((line, index) => (
          <Line key={`line-${index}`} n={index + 1} text={`${line}`} />
        ))}
      </List>
      <Button variant="contained" color="primary">
        Generate template
      </Button>
    </Paper>
  );
};
