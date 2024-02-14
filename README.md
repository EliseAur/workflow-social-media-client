# Workflow Social Media Client

![Build Status](https://github.com/EliseAur/workflow-social-media-client/actions/workflows/main.yml/badge.svg)

## Description

This project is part of the Workflow Course Assignment. It focuses on improving the quality of a package by establishing helpful workflows that make the development process more efficient.

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
# Clone the repository
git clone https://github.com/EliseAur/workflow-social-media-client.git

# Navigate to the project directory
cd workflow-social-media-client

# Install dependencies
npm install

```

## Scripts

- **npm run build**: Build the SASS files.
- **npm run watch**: Watch for changes in SASS files and automatically build.
- **npm start**: Start a live server.
- **npm run dev**: Run watch and start in parallel.
- **npm run format**: Format code using Prettier.
- **npm run lint**: Run ESLint to check for linting issues. The issues will appear in the command line (CLI).
- **npm run lint-fix**: Run ESLint with the --fix option to automatically fix linting issues.
- **npm test**: Run unit tests using Jest. The tests appears in the command line (CLI)
- **npm run test-e2e**: Open Cypress for end-to-end tests. I recommend to use Electron.
- **npm run test-e2e-cli**: Run Cypress end-to-end tests in the command line (CLI).

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Sass](https://github.com/sass/dart-sass) - A pure JavaScript implementation of Sass.
- [dotenv](https://www.npmjs.com/package/dotenv) - For managing environment variables
- [Cypress](https://www.cypress.io/) - End-to-end testing framework
- [Jest](https://jestjs.io/) - JavaScript testing framework
- [Eslint](https://eslint.org/) - JavaScript linting tool
- [Prettier](https://prettier.io/) - Code formatter
- [Live server](https://github.com/tapio/live-server#readme) - Simple development http server with live reload capability
- [Husky](https://github.com/typicode/husky#readme) - Modern native Git hooks

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

- Noroff (the app)
- Elise Aurtande (workflows for linting, formatting on commit and testing)
