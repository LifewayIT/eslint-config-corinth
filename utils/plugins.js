const path = require('path');

const isPackageInstalled = (path) => {
  try {
    require(path);
    return true;
  } catch (e) {
    return false;
  }
};

const ifInstalled = (requestor, package, config) => {
  if (isPackageInstalled(package)) {
    return [config];
  } else {
    console.warn(`${package} is required by eslint-config-corinth/${requestor}, without it some functionality may be missing.`);
    return [];
  }
}


const getPluginName = (plugin) => Array.isArray(plugin)
  ? plugin
  : [`eslint-plugin-${plugin}`, `./${plugin}.js`];

const useIfInstalled = (requestor, basePath, plugin, config) => {
  if (isPackageInstalled(plugin)) {
    return path.resolve(basePath, config);
  } else {
    console.warn(`${plugin} is required by eslint-config-corinth/${requestor}, without it some functionality may be missing.`);
    return undefined;
  }
}

const pluginConfigs = (requestor, basePath, plugins) => plugins
  .map(getPluginName)
  .map(([plugin, config]) => useIfInstalled(requestor, basePath, plugin, config))
  .filter(c => c != null);


module.exports = {
  isPackageInstalled,
  ifInstalled,
  pluginConfigs
};
