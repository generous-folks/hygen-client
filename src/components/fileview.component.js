import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { getFileRequest } from '../utils/requests.utils';

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
    '& .controls-fileview': {
      display: 'block',
      position: 'absolute',
      top: '20px',
      left: '25px',
      zIndex: 1,
    },
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
        <div className="controls-fileview">
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

export const FileView = ({ file, path }) => {
  const classes = useStyles();

  const [filee, setFilee] = React.useState(null);

  React.useEffect(() => {
    console.log(file);
    if (!filee) {
      getFileRequest(path, setFilee);
      // fetch('http://localhost:5000/api/files/get')
      //   .then(res => res.json())
      //   .then(setFiles)
      //   .catch(err => console.log(err));
    }
  }, [filee]);

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
