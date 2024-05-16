const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  // user: 'carmen',
  // password: 'password',
  database: 'scheduler',
})
// , server_settings={'search_path': 'myschema'});

// pool.query("SET search_path TO 'DOCUMENT';");
const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};
