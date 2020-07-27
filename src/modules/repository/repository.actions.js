export const FETCH_REPOSITORY = 'repository/FETCH_REPOSITORY';
export const SET_FILES = 'repository/SET_FILES';

export const setFiles = (files, repository) => dispatch => {
  if (files.length !== 0 && repository) {
    return null;
  }
  return fetch('http://localhost:5000/api/files/' + repository)
    .then(res => res.json())
    .then(data => dispatch({ type: SET_FILES, files: data }))
    .catch(err => console.log(err));
};
