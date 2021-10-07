const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'adeprasetya',
        mongodb_password: 'Mow7IAO29dlLznFw',
        mongodb_clustername: 'clusternextjs',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'adeprasetya',
      mongodb_password: 'Mow7IAO29dlLznFw',
      mongodb_clustername: 'clusternextjs',
      mongodb_database: 'my-site',
    },
  };
};
