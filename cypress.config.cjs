require("dotenv/config");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    USER_PASSWORD: process.env.USER_PASSWORD,
    USER_NAME: process.env.USER_NAME,
    USER_EMAIL: process.env.USER_EMAIL,
    USER_AVATAR: process.env.USER_AVATAR,
  },
});
