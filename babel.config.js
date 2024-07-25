module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ... other configs, if any
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigations': './src/navigations',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],

    // ... other configs, if any
  ],
};
