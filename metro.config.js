/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules.crypto = path.resolve(__dirname, './node_modules/crypto-js');
config.resolver.extraNodeModules.zlib = path.resolve(__dirname, './node_modules/browserify-zlib');
config.transformer.getTransformOptions = async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: false,
    },
  }
);

module.exports = config;
// module.exports = {
//   resolver: {
//     extraNodeModules: {
//         crypto: path.resolve(__dirname, './node_modules/crypto-js'),
//         zlib: path.resolve(__dirname, './node_modules/browserify-zlib')

//         //   crypto: path.resolve(__dirname, './node_modules/react-native-crypto'),
//     //   net: path.resolve(__dirname, './node_modules/react-native-tcp'),
//     //   os: path.resolve(__dirname, './node_modules/react-native-os'),
//     //   querystring: path.resolve(__dirname, './node_modules/querystring-es3'),
//     //   dgram: path.resolve(__dirname, './node_modules/react-native-udp'),
//     //   stream: path.resolve(__dirname, './node_modules/readable-stream'),
//     //   fs: path.resolve(__dirname, './node_modules/react-native-level-fs'),
//     //   vm: path.resolve(__dirname, './node_modules/vm-browserify'),
//     },
//   },
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// };