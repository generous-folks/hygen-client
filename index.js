const express = require('express');
const FilesRouter = require('./server/api/routes/files.route');
const cors = require('cors');
const bodyParser = require('body-parser');

//Express App setup
const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 5000);

// Expose api routes
app.use('/api', FilesRouter);

// expose app route
app.use(express.static(__dirname + '/build'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(app.get('port'), () =>
  console.log(`Example app listening on port ${app.get('port')} !`),
);
