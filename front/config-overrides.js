/* eslint-disable */
const path = require('path');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve = {
    ...config.resolve,
    alias: {
      containers: path.resolve(__dirname, 'src/containers/'),
      components: path.resolve(__dirname, 'src/components/'),
      resolvers: path.resolve(__dirname, 'src/resolvers/'),
      mutations: path.resolve(__dirname, 'src/graphql/mutations/'),
      queries: path.resolve(__dirname, 'src/graphql/queries/'),
      subscriptions: path.resolve(__dirname, 'src/graphql/subscriptions/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      config: path.resolve(__dirname, 'src/config'),
      utils: path.resolve(__dirname, 'src/utils'),
      settings: path.resolve(__dirname, 'src/settings'),
      adapters: path.resolve(__dirname, 'src/adapters')
    }
  };

  return config;
}
