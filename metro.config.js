/* eslint-disable prettier/prettier */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
		sourceExts: ['ts', 'tsx', 'js', 'jsx', 'json', 'graphql'],
	},
};
