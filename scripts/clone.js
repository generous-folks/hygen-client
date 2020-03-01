/* eslint-disable no-unused-vars */
const { execSync } = require('child_process');
const fs = require('fs');

const run = () => {
  console.log('cloning repository...');

  execSync('cd projects && git clone https://github.com/generous-folks/react-course.git && cd ..', {
    encoding: 'utf8',
  });
};

run();
