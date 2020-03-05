const glob = require('glob');
const _ = require('lodash');

const getLastString = string => {
  const strArray = string.split('/');
  const lastString = strArray[strArray.length - 1];

  return lastString;
};

const getTreeView = async (project, res) =>
  glob(
    `projects/${project}/**`,
    {
      dot: true,
      ignore: ['node_modules', '**/.git/**', '**/yarn.lock', '**/.yarnrc', '**/package.json'],
    },
    (error, files) => {
      console.log(`Reading ${project} files...`);

      if (error) {
        console.error(error);
        process.exit(1);
      }

      const treeStructure = files.map(file => file.replace('projects/', ''));

      const buildPaths = allFiles =>
        allFiles.reduce(
          (acc, curr) => _.set(acc, curr.split('/'), { path: curr, label: getLastString(curr) }),
          {},
        );

      return res.json(buildPaths(treeStructure));
    },
  );

module.exports = { getTreeView };
