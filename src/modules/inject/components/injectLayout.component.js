import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

import { InjectForm } from './injectForm.component';
import { InjectFileView } from './injectFileView.component';
import { useInjectPathSelector, useInjectFormSelector } from '../inject.selectors';
import { useInjectDispatch } from '../inject.context';

import { FileView } from '../../../components/fileView.component';

const useStyles = makeStyles({
  sticky: {
    position: 'sticky',
    top: '80px',
  },
});

export const InjectLayout = () => {
  const [injectForm, setInjectForm] = useState({});

  const classes = useStyles();

  const dispatch = useInjectDispatch();

  const path = useInjectPathSelector();
  const form = useInjectFormSelector();

  return (
    <Grid container justify="space-around">
      <Grid item md={6}>
        <FileView path={path} dispatch={dispatch} />
      </Grid>
      <Grid item md={5}>
        <div className={classes.sticky}>
          <InjectForm setInjectForm={setInjectForm} />
          <InjectFileView {...injectForm} {...form} />
        </div>
      </Grid>
    </Grid>
  );
};
