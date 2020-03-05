/* eslint-disable react/prop-types */
import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    overflow: 'auto',
  },
  line: {
    position: 'relative',
    height: '18px',
    padding: 0,
    '&:hover': {
      background: 'yellow',
      cursor: 'pointer',
    },
    // '& .hover-selector-fileview': {
    //   display: 'block',
    //   position: 'absolute',
    //   top: '20px',
    //   left: '25px',
    //   zIndex: 1,
    // },
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
  const [hasButtons, setHasButtons] = React.useState(false);
  const classes = useStyles();
  return (
    <ListItem button onClick={() => setHasButtons(visible => !visible)} className={classes.line}>
      <span className={classes.lineNumber}>{n}</span>
      <ListItemText className={classes.lineText} primary={text} />
      {hasButtons && (
        <div className="hover-selector-fileview">
          <Button variant="contained" color="primary">
            Before
          </Button>
          <Button variant="contained" color="secondary">
            After
          </Button>
        </div>
      )}
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
