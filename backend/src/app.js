const express = require('express');
const { query } = require('./query');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('basic get is working');
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
    const userId = req.query.coachId;

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

app.post('/openings', async (req, res) => {
  try {
    const body = req.body;

    const result = await query(`
    INSERT INTO myschema.opening(user_coach_id, time) VALUES ('${body.coachId}', '${body.time}') 
    ;`)
    res.status(200).json(result);
    
  } catch (e) {
    console.error(1111, e);
    res.status(500).send("Internal Server Error");
  }
  return res;

});


app.listen(8080, async () => {
  console.log('server listening on port 8080')
});


module.exports = app;