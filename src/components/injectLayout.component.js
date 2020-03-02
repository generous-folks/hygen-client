import React, { useState } from 'react';

import { InjectForm } from './injectForm.component';
import { InjectFileView } from './injectFileView.component';

export const InjectLayout = () => {
  const [injectForm, setInjectForm] = useState({});

  return (
    <>
      <InjectForm setInjectForm={setInjectForm} />
      <InjectFileView {...injectForm} />
    </>
  );
};
