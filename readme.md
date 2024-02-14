# Workflow Social Media Client

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

## Contributing

If you want to contribute to this project, whether it is reporting a bug, suggesting improvement or submitting code changes, you are welcome.

## How to contribute

1. **Fork the repo:** Click on the "Fork" button and clone your fork locally.
2. **Create a branch:** Switch to the 'workflow' branch. If you are fixing a bug, name your branch 'fix/the-issue', if you are adding a new feature, use 'feature/feature-name'.

```bash
   git checkout workflow
   git checkout -b fix/the-issue
```

3. **Make your changes**
4. **Test locally:** Before submitting a PR, test your changes locally to make sure they work as expected. You should also run the unit-test and e2e-tests to see if they pass.

```bash
   npm run test
```

5. **Commit changes:** Commit your changes with clear and concise messages.
6. **Push to your fork:** Push changes to your fork on github.
7. **Open a Pull Request:** Open a pull request from your fork to the 'workflow' branch of the main repository. Provide a detailed description of your changes.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

- Noroff (the app)
- Elise Aurtande (workflows for linting, formatting on commit and testing)
