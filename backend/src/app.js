const express = require('express');
const { query } = require('./query');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('basic get is working');
  // await query();
});

app.get('/users', async (req, res) => {
  try {
    const type = req.query.type;

    const result = await query(`
      SELECT * FROM myschema.user ${type && `WHERE user_type = '${type}'`};
    `);
    res.status(200).json(result.rows);
  } catch (e) {
    console.error(1111, e);
    res.status(500).send("Internal Server Error");
  }
  return res;
});



app.listen(8080, async () => {
  console.log('server listening on port 8080')
  // console.log(await query("SET SCHEMA TO myschema;"));
});


module.exports = app;