import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import { InjectForm } from './injectForm.component';
import { InjectFileView } from './injectFileView.component';

import { FileView } from '../../../components/fileView.component';

import { files } from '../../../fixtures/files';

const fileOne = files[0];

export const InjectLayout = () => {
  const [injectForm, setInjectForm] = useState({});

  return (
    <Grid container justify="space-around">
      <Grid item md={6}>
        <FileView file={fileOne} />
      </Grid>
      <Grid item md={5}>
        <InjectForm setInjectForm={setInjectForm} />
        <InjectFileView {...injectForm} />
      </Grid>
    </Grid>
  );
};
