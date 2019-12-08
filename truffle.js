// For Windows truffle-config.js: const path = require("path");
// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!
// For Windows truffle-config.js: contracts_build_directory: path.join(__dirname, "client/src/contracts")

module.exports = {
    networks: {
      development: {
        host: "127.0.01",
        port: "8545",
        network_id: "*"
      }
    }
};
