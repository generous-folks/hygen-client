import React from 'react';

import { Layout } from '../components/layout.component';
import { InjectLayout } from '../modules/inject/components/injectLayout.component';
import { useInjectPathSelector } from '../modules/inject/inject.selectors';
import { useInjectDispatch } from '../modules/inject/inject.context';

export const InjectPage = () => {
  const dispatch = useInjectDispatch();
  const path = useInjectPathSelector();

  return (
    <Layout dispatch={dispatch}>
      <h2>{path}</h2>
      <InjectLayout />
    </Layout>
  );
};
