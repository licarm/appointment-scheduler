const { execSync: exec } = require('child_process');

const clear = async () => {
  try {
    console.log('drop begin');

    await exec(
      `dropdb -U carmen scheduler;`
    );

    console.log('drop successful')
  } catch (err) {
    console.error('drop failed', err.message);

    process.exit(1);
  }
};

clear();
