const { execSync: exec } = require('child_process');

const setUp = async () => {
  try {
    console.log('set up begin');

    // CREATE DB
    await exec(
      `
      dropdb -U carmen scheduler;
      createdb -U carmen -O carmen scheduler;
      `
    );
    console.log('db created');

    // CREATE SCHEMA
    exec(
      `psql -d scheduler -U carmen < ../db/schema.sql`
    );


    console.log('schema created');

    console.log('set up successful');
  } catch (err) {
    console.error('set up failed', err.message);

    process.exit(1);
  }
};

setUp();
