module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // Expo 内置预设，支持 RN、JSX、TS
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@features': './src/features',
            '@navigation': './src/navigation',
            '@services': './src/services',
            '@store': './src/store',
            '@utils': './src/utils',
            '@styles': './src/styles',
            '@locales': './src/locales',
            '@charts': './src/charts',
          },
        },
      ],
    ],
  };
};
