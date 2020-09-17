const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

var server = app.listen(8000, () => {
	var port = server.address().port;
  console.log('Example app listening on port %s', port);
});

module.exports = server;
