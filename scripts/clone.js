const { exec } = require('child_process');
const util = require('util');

const clone = util.promisify(exec);

const gitClone = async (gitRepository, res) => {
  console.log('cloning repository...');

  return clone(`cd projects && git clone ${gitRepository} && cd ..`, {
    encoding: 'utf-8',
    dot: true,
  })
    .then(res => res.status(200).send())
    .catch(err => res.status(500).send(err));
};

module.exports = { gitClone };
