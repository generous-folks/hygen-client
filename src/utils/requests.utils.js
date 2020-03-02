export const cloneRequest = url => {
  // Clone repository fetch
  const repository = {
    url,
  };
  return fetch('api/files/clone', {
    method: 'POST',
    body: JSON.stringify(repository),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => console.log(res.json()))
    .catch(err => console.log(err));
};

export const getTreeRequest = (projectName, setter) => {
  return fetch('http://localhost:5000/api/files/' + projectName)
    .then(res => res.json())
    .then(setter)
    .catch(err => console.log(err));
};
