import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  spacing: {
    marginTop: '2em',
  },
});

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  const classes = useStyles();

  return <Container className={classes.spacing}>{children}</Container>;
};
