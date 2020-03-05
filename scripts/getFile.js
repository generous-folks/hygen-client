/* eslint-disable no-unused-vars */
const fs = require('fs');
//   const readFiles = files.map(file => {
//     const currentFile = fs.readFileSync(file, 'utf-8');
//     const parsedFile = currentFile.split('\n').map(line => line.replace(' ', '\xa0')); //.join('\n');
//     // fs.writeFileSync(file, parsedFile, 'utf-8');
//     return parsedFile;
//   });

const getFile = async (path, res) => {
  const file = fs.readFile(path, { encoding: 'utf-8' }, (error, data) => {
    console.log(data);
  });
};

module.exports = { getFile };
