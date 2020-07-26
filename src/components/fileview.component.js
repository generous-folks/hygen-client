import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { getFileRequest } from '../utils/requests.utils';
import { EMPTY_ARRAY } from '../constants/emptyPrimitives.constants';
import { SET_INJECT_FORM_FIELD } from '../modules/inject/inject.actions';

const useStyles = makeStyles({
  paper: {
    overflow: 'auto',
    minHeight: '200px',
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
    maxWidth: '400px',
  },
  lineNumber: {
    width: '30px',
    marginRight: '5px',
    padding: '0 12px',
    background: 'lightgrey',
    userSelect: 'none',
  },
});

const Line = ({ text, lineIndex, buttonLineIndex, setButtonLineIndex, dispatch }) => {
  const [hasButtons, setHasButtons] = React.useState(false);
  const classes = useStyles();

  const setFormField = (fieldKey, fieldValue) => () =>
    dispatch({
      type: SET_INJECT_FORM_FIELD,
      field: { [fieldKey]: new RegExp(fieldValue.replace(/\*/g, '\\*')) },
    });

  useEffect(() => {
    if (lineIndex !== buttonLineIndex && hasButtons) {
      setHasButtons(false);
    }
  }, [lineIndex, buttonLineIndex, hasButtons]);

  const handleLineClick = () => {
    setButtonLineIndex();
    setHasButtons(visible => !visible);
  };

  return (
    <ListItem button onClick={handleLineClick} className={classes.line}>
      <span className={classes.lineNumber}>{lineIndex}</span>
      <ListItemText className={classes.lineText} primary={text} />
      {hasButtons && (
        <div className="controls-fileview">
          <Button onClick={setFormField('before', text)} variant="contained" color="primary">
            Before
          </Button>
          <Button onClick={setFormField('after', text)} variant="contained" color="secondary">
            After
          </Button>
        </div>
      )}
    </ListItem>
  );
};

export const FileView = ({ path, dispatch }) => {
  const classes = useStyles();
  const [buttonLineIndex, setButtonLineIndex] = useState(null);

  const [file, setFile] = React.useState(EMPTY_ARRAY);

  React.useEffect(() => {
    if (path) {
      getFileRequest(path, setFile);
    }
  }, [path, setFile]);

  return file.length > 0 ? (
    <Paper className={classes.paper}>
      <List>
        {file.map((line, index) => (
          <Line
            key={`line-${index}`}
            setButtonLineIndex={() => setButtonLineIndex(index + 1)}
            buttonLineIndex={buttonLineIndex}
            lineIndex={index + 1}
            text={`${line}`}
            dispatch={dispatch}
          />
        ))}
      </List>
    </Paper>
  ) : (
    <p>Please, select a file</p>
  );
};
