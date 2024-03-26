const express = require('express');

const app = express();
app.get('/', function(req, res) {
  return res.json({hello: 'world'});	
});

app.listen(3000, '0.0.0.0', () => { console.log('Server started on port: 3000, host: 0.0.0.0')});
