// filepath: c:\Users\deryd\Desktop\WORKSPACE\Personal Projects\ChillBreak\metro.config.js
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig.getDefaultValues(
    'metro'
  );

  return {
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'db'),
      sourceExts: [...sourceExts, 'db'],
    },
  };
})();