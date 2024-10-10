module.exports = function override(config, env) {
    config.watchOptions = {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    };
    return config;
  };