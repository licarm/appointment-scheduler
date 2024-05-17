const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'scheduler',
})

const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};
