export const cloneRequest = url => {
  // Clone repository fetch
  return fetch('http://localhost:5000/api/files/clone', {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const getFileRequest = (path, setter) => {
  // Get single project file from path

  return fetch('http://localhost:5000/api/files/get', {
    method: 'POST',
    body: JSON.stringify({ path }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(setter)
    .catch(err => console.log(err));
};

export const getTreeRequest = (projectName, setter) => {
  return fetch('http://localhost:5000/api/files/' + projectName)
    .then(res => res.json())
    .then(setter)
    .catch(err => console.log(err));
};
