/* eslint-disable no-unused-vars */
const glob = require('glob');

// const project = process.argv[2];

const getTreeView = async (project, res) =>
  glob(
    `projects/${project}/**`,
    {
      dot: true,
      ignore: ['node_modules', '**/.git/**', '**/yarn.lock', '**/.yarnrc', '**/package.json'],
    },
    (error, files) => {
      if (error) {
        console.error(error);
        process.exit(1);
      }

      const treeStructure = files.map(file => file.replace('projects/', ''));

      // console.log(treeStructure);

      return res.json(treeStructure);
    },
  );

module.exports = { getTreeView };
