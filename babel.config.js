module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@assets': './assets',
          '@components': './components',
          '@routes': './routes',
          '@screens': './screens',
          '@storage': './storage',
          '@theme': './theme',
          '@types': './types',
          '@utils': './utils'
        }
      }]
    ]
  };
};
