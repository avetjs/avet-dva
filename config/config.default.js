exports.build = {
  babel: {
    plugins: [
      ["module-resolver", {
        "alias": {
          "dva": require.resolve("dva-no-router")
        }
      }]
    ]
  }
}
