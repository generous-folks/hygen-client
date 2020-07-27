import React, { useState } from 'react';

import { Layout } from '../components/layout.component';
import { Button, TextField } from '@material-ui/core';
import { EMPTY_STRING, NOOP } from '../constants/emptyPrimitives.constants';
import { cloneRequest } from '../utils/requests.utils';
import { useRepositoryDispatch } from '../modules/repository/repository.context';
import { FETCH_REPOSITORY } from '../modules/repository/repository.actions';
import { useHistory } from 'react-router-dom';

const getRepoName = gitUrl => {
  const urlArray = gitUrl.replace('.git', '').split('/');

  return urlArray[urlArray.length - 1];
};

export const HomePage = () => {
  const [repoUrl, setRepoUrl] = useState(EMPTY_STRING);
  const history = useHistory();

  const dispatch = useRepositoryDispatch();

  const handleClick = async e => {
    e.preventDefault();
    if (repoUrl !== EMPTY_STRING) {
      await cloneRequest(repoUrl);
      const name = getRepoName(repoUrl);
      dispatch({ type: FETCH_REPOSITORY, name });
      history.push('/inject/' + name);
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
          <Button onClick={handleClick}>Fetch repository</Button>
        </form>
      </Layout>
    </>
  );
};
