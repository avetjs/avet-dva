exports.build = {
  babel: (babelConfig) => {
    babelConfig.plugins.push(
      ["module-resolver", {
        "alias": {
          "dva": require.resolve("dva-no-router")
        }
      }]
    );

    return babelConfig;
  }
}
