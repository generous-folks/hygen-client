import React from 'react';
import Grid from '@material-ui/core/Grid';

import { Layout } from './components/layout.component';
import { FileView } from './components/fileview.component';
import { InjectLayout } from './components/injectLayout.component';

import { files } from './fixtures/files';
import { SimpleDialogDemo } from './components/modal.component';

const fileOne = files[0];

function App() {
  return (
    <Layout>
      <SimpleDialogDemo />
      <Grid container justify="space-around">
        <Grid item md={6}>
          <FileView file={fileOne} />
        </Grid>
        <Grid item md={5}>
          <InjectLayout />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;
