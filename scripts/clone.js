const { exec } = require('child_process');
const util = require('util');

const clone = util.promisify(exec);

const gitClone = async (gitRepository, res) => {
  console.log('cloning repository...');

  try {
    await clone(`cd projects && git clone ${gitRepository} && cd ..`, {
      encoding: 'utf8',
    });
  } catch (error) {
    res.status(500).send(error);
  }

  res.status(200).send();
};

module.exports = { gitClone };
