# VermietetTest

This is a simple invoice project that allows customers to be able to view, add, edit and delete invoices (However, invoice can be viewed and can be added but due to time contigences invoice edit and delete has not been implemented but will be implemented later). Invoices can be added by retrieving the amount from the connected bank account (a bank account must have been connected to be able to use the dashboard, in this project it was handled with state) and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.13.

## Technologies Used

Angular 8
Bootstrap 4

## Get Started
### Clone the repo

git clone https://github.com/amakomitchell/vermietet-test.git
cd vermietet-test

### Install npm packages

Install the npm packages described in the package.json and verify that it works:
npm install
ng serve
The ng serve command builds (compiles TypeScript and copies assets) the application into dist/, watches for changes to the source files. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Shut it down manually with Ctrl-C.

### npm scripts

These are the most useful commands defined in package.json:

npm start - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
npm run build - runs the TypeScript compiler and asset copier once.
npm run build:watch - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into dist/.
npm run lint - runs tslint on the project files.
npm run serve - runs lite-server.
These are the test-related scripts:

ng test - Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
ng e2e - Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
npm run ci - cleans, lints, and builds the application and runs Intern tests (both unit and functional) one time.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
