import React, { useState } from 'react';

import { Layout } from '../components/layout.component';
import { Button, TextField } from '@material-ui/core';
import { EMPTY_STRING, NOOP } from '../constants/emptyPrimitives.constants';
import { cloneRequest } from '../utils/requests.utils';
import { useRepositoryDispatch } from '../modules/repository/repository.context';
import { FETCH_REPOSITORY } from '../modules/repository/repository.actions';

export const HomePage = () => {
  const [repoUrl, setRepoUrl] = useState(EMPTY_STRING);

  const dispatch = useRepositoryDispatch();

  const handleClick = async e => {
    e.preventDefault();
    if (repoUrl !== EMPTY_STRING) {
      await cloneRequest(repoUrl);
      dispatch({ type: FETCH_REPOSITORY });
    }
  };

  const handleInput = e => setRepoUrl(e.target.value);
  return (
    <>
      <Layout dispatch={NOOP}>
        <form onSubmit={handleClick}>
          <TextField
            value={repoUrl}
            onChange={handleInput}
            placeholder="type a git repository url"
          />
          <Button>Fetch repository</Button>
        </form>
      </Layout>
    </>
  );
};
