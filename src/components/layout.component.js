import React from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';
import { DrawerComponent } from './drawer.component';

const useStyles = makeStyles({
  spacing: {
    marginTop: '2em',
  },
});

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.spacing}>
      <DrawerComponent>{children}</DrawerComponent>
    </Container>
  );
};
