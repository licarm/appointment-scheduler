const express = require('express');
const { query } = require('./query');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('basic get is working');
  // await query();
});



app.listen(8080, async () => {
  console.log('server listening on port 8080')
  // console.log(await query("SET SCHEMA TO myschema;"));
});


module.exports = app;