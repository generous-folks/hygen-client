import React, { useState } from 'react';

import { InjectForm } from './injectForm.component';
import { InjectFileView } from './previewInject.component';

export const FullInject = () => {
  const [injectForm, setInjectForm] = useState({});

  return (
    <>
      <InjectForm setInjectForm={setInjectForm} />
      <InjectFileView {...injectForm} />
    </>
  );
};
