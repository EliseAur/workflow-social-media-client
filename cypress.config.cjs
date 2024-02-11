// import { defineConfig } from "cypress";
require("dotenv/config");
const { defineConfig } = require("cypress");
// require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    // Cypress globals
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    password: process.env.USER_PASSWORD,
  },
});

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
//   env: {
//     password: process.env.USER_PASSWORD,
//   },
// });
