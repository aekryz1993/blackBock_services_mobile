const envFile = '__DEV__' ? '.env.development' : '.env.production';

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: envFile,
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          '@src': './src',
          '@apis': './src/apis',
          '@actions': './src/store/actions',
          '@components': './src/components',
        },
      },
    ],
  ],
};
