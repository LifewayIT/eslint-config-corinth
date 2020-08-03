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

module.exports = {
  isPackageInstalled,
  ifInstalled
};
