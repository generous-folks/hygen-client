import React from 'react';
import Grid from '@material-ui/core/Grid';

import { FileView } from './components/fileview.component';
import { Layout } from './components/layout.component';
import { FullInject } from './components/fullinject.component';

function App() {
  return (
    <Layout>
      <Grid container justify="space-around">
        <Grid item md={6}>
          <FileView />
        </Grid>
        <Grid item md={5}>
          <FullInject />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;
