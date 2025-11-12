const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(__dirname, '../..');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [monorepoRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

config.resolver.extraNodeModules = {
  '@ui': path.resolve(monorepoRoot, 'packages/ui/src'),
  '@api-client': path.resolve(monorepoRoot, 'packages/api-client/src'),
  '@config': path.resolve(monorepoRoot, 'packages/config/src'),
};

module.exports = config;
