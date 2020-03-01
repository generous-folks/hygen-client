const Router = require('express');
const FileController = require('../controllers/files.controller');
const FileRouter = new Router();

// Get all Files
// FileRouter.route('/files').get(FileController.getFiles);

// Get all files for a given project
FileRouter.route('/files/:project').get(FileController.getFiles);

// // Add a new File
// FileRouter.route('/file').post(FileController.addFile);

// // Delete a File by cuid
// FileRouter.route('/files/:cuid').delete(FileController.deleteFile);

module.exports = FileRouter;
