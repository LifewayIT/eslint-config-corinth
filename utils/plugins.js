const isPackageInstalled = (path) => {
  try {
    require(path);
    return true;
  } catch (e) {
    return false;
  }
};

const ifInstalled = (package, config) =>
  isPackageInstalled(package) ? config : undefined;


const getPluginName = (plugin) => Array.isArray(plugin)
  ? plugin
  : [`eslint-plugin-${plugin}`, `./${plugin}.js`];

const useIfInstalled = (plugin, config) =>
  isPackageInstalled(plugin)
    ? require.resolve(config)
    : undefined;

const pluginConfigs = (plugins) => plugins
  .map(getPluginName)
  .map(([plugin, config]) => useIfInstalled(plugin, config))
  .filter(c => c != null);


module.exports = {
  isPackageInstalled,
  ifInstalled,
  pluginConfigs
};
