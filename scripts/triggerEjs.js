/* eslint-disable no-unused-vars */
const { execSync } = require('child_process');
const glob = require('glob');
const fs = require('fs');

const conf = [
  {
    cmd: ['yarn', 'hygen', 'test', 'new:.*yayaya.tf'],
    args: {
      customerCode: 'toto',
      prodDnsZone: '*.toto.fr',
      prodDomainsUrl: ['toto-front.toto.fr', 'toto.fr'],
    },
  },
];
const config = {
  cmd: ['yarn', 'hygen', 'test', 'new:yayaya.tf'],
  args: {
    customerCode: 'toto',
    prodDnsZone: '*.toto.fr',
  },
  generators: [
    {
      folder: 'test',
      generatorType: 'new',
      templateFile: 'yayaya.tf',
      destinationFile: '.cloud/yayaya.tf',
      isInject: false,
      skipIf: 'something',
      after: 'domains',
      before: null,
      unlessExists: false,
      template: '"<%= customerCode %>" = "<%= prodDnsZone %>"',
    },
  ],
};

// const run = () => {
// 	console.log("running generator script")
// 	return conf.map(generator => {
// 		let cmd = generator.cmd;
// 		Object.keys(generator.args).map(arg => cmd.push(`--${arg} "${generator.args[arg]}"`));
// 		console.log(cmd, cmd.join(' '));

// 		const ex = execSync(cmd.join(' '), { encoding: 'utf8' });
// 		console.log(ex);
// 	});
// };

// run();
console.log(__dirname);
glob('**/*.tfvars', { dot: true }, (error, files) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(files);
  const readFiles = files.map(file => {
    const currentFile = fs.readFileSync(file, 'utf-8');
    const parsedFile = currentFile.split('\n').map(line => line.replace(' ', '\xa0')); //.join('\n');
    // fs.writeFileSync(file, parsedFile, 'utf-8');
    return parsedFile;
  });

  console.log(readFiles);
});
