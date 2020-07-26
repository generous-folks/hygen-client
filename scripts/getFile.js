const fs = require('fs');

const getFile = (path, res) => {
  return fs.readFile(`projects/${path}`, { encoding: 'utf-8' }, (error, data) => {
    if (error) {
      return res.status(500).send(error);
    }

    if (!data || !data.split) {
      return res.status(404).send();
    }

    return res.status(200).json(data.split('\n'));
  });
};

module.exports = { getFile };
