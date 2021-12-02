# Getting Started with the Create React App Micro-Frontend Repository

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run coverage`

Launches the test runner in a single-run mode and generates code coverage information when complete. Code coverage reports can be found in the `reports/coverage` directory.

### `npm run generate`

Uses [Plop JS](https://plopjs.com/) to execute the generators available in this repository.  At the moment, only one generator is provided to build the React.Component classes, HTMLElement classes, and tests required for building a new custom element.

#### <b/>Example:</b>
```
npm run generate customElement example
```

### `npm run build`

Builds the app for production to the `dist` folder using [webpack](https://webpack.js.org/).

The build, when imported into a host application, provides a custom element registry of all Web Components built in this library.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm start`

Runs `npm run build` and serves the build artifacts generated in the `dist` directory for public consumption using [serve](https://www.npmjs.com/package/serve).\
Open [http://localhost:5000/main.js](http://localhost:5000/main.js) to view it in the browser.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

