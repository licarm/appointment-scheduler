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
    console.log('get users resolve')
  } catch (e) {
    console.error(1111, e);
    res.status(500).send("Internal Server Error");
  }
  return res;
});

app.get('/openings', async (req,res) => {
  try {
    const userId = req.query.userId;

    const result = await query(`
      SELECT * FROM myschema.opening ${userId && `WHERE user_coach_id = '${userId}'`};
    `);
    res.status(200).json(result.rows);
  } catch (e) {
    console.error(1111, e);
    res.status(500).send("Internal Server Error");
  }
  return res;
});

// app.post('/openings', async (req, res) => {
//   try {
//     const body = req.body;
//     await query(`
//     INSERT INTO myschema.opening VALUES (${body.coachId}, ${body.time}) 
//     WHERE NOT EXISTS (
//       SELECT time FROM myschema.opening 
//         WHERE user_coach_id = ${body.coachId}
//     )
//     `)
//   }
// });


app.listen(8080, async () => {
  console.log('server listening on port 8080')
  // console.log(await query("SET SCHEMA TO myschema;"));
});


module.exports = app;