module.exports = {
  plugins: [
    ...
    [
        'react-native-reanimated/plugin', {
            relativeSourceLocation: true,
        },
    ]
],
    project: {
      ios: {},
      android: {}, // grouped into "project"
    },
    assets: ["./assets/fonts/"],
  };