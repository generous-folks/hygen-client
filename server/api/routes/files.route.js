const Router = require('express');
const FileController = require('../controllers/files.controller');
const FileRouter = new Router();

// Clone given repository into projects folder
FileRouter.route('/files/clone').post(FileController.cloneRepository);

// Get all files for a given project
FileRouter.route('/files/:project').get(FileController.getFiles);

// // Add a new File
// FileRouter.route('/file').post(FileController.addFile);

// // Delete a File by cuid
// FileRouter.route('/files/:cuid').delete(FileController.deleteFile);

module.exports = FileRouter;
