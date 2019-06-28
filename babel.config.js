module.exports = {
  presets: [
    'module:metro-react-native-babel-preset'
  ],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        theme: './src/theme',
        screens: './src/screens',
        actions: './src/actions',
        services: './src/services',
        components: './src/components',
        utils: './src/utils',
        assets: './assets'
      }
    }]
  ]
}
