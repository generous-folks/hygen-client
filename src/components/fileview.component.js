/* eslint-disable react/prop-types */
import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  paper: {
    overflow: 'auto',
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

export const FileView = ({ file }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List>
        {file.map((line, index) => (
          <Line key={`line-${index}`} n={index + 1} text={`${line}`} />
        ))}
      </List>
    </Paper>
  );
};
