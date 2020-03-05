import React from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../components/layout.component';
import { InjectLayout } from '../modules/inject/components/injectLayout.component';
// import { Article } from '../modules/articles/components/article.component';

export const InjectPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <h2>{id}</h2>
      <InjectLayout />
    </Layout>
  );
};
