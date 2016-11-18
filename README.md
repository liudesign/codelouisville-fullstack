#Code Louisville Fullstack Project

This project was created with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.1.0.

Project is a test prototype for a marketing feature in Twin Spires' v.next webapp, a registration flows using the fullstack technology.This test will allow AB testing of user registration flows to create account on TwinSpires.com. This initiative will determine the best way to increase conversion rates from abandoned registration starts to improving the best user experience and reducing user frustrations.


###The tech stack

- [Gulp](http://gulpjs.com/) Tasks runner to automate the build and development of app
- [Yeoman](http://yeoman.io/) Scaffolding generator that spins up a project quickly with basic parts of the web app
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`
- [ExpressJS](https://nodejs.org) Simplify the web's backend including easier route creation
- [AngularJS](https://angularjs.org/) A complex Javascript framework that extends HTML's limitations. It's HTML on steroids, providing a lot of functionalities out of the box, including two-way data binding, client-side validations with just a few lines of code. Can be used with other Javascript framework or library.
- [Node.js and npm](nodejs.org) NodeJS and NPM allow Javascript developers to get their hands on backend control

##The setup

```
├─ client                           Front-end directory
│   ├─ app                          - All  app specific components: main, account, admin
│   │   │                             With yeoman add component using
│   │   │                             `yo angular-fullstack:route main`
│   │   └main                       Which creates this Main component
│   │     └ main.controller.js      - Controller for main route.
│   │     └ main.controller.spec.js - Test file using Karma/mocha.           
│   │     └ main.html               - Template that shows the views of app component
│   │     └ main.scss               - Sass file that will spit out CSS styles for the component
│   │          
│   ├── assets                      Custom assets: fonts, images, etc…
│   ├── components                  Reusable components, non-specific to app
│
├── e2e                             - Protractor end to end tests
│
└── server                          Back-end directory
    ├── api                         - App's backend/server api - endpoints, routes
    ├── auth                        - Handle authentication with different auth strategies
    ├── components                  - Reusable or app-wide components
    ├── config                      - Where most of app's configuration goes
    │   └── local.env.js            - Keep environment variables out of source control.
    │   └── environment             - Configuration specific to the environment the server is being run in
    └── views                       - Server rendered 404 page

```
### Running the app
You'll need to have *NodeJS/NPM* and *Mongo DB* installed. NPM, Node Package Manager, will install the rest - Gulp, Express and other dependencies, courtesy of the package.json from Angular-fullstack repo.  

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server, or gulp build`. It should open the client in your browser when ready.
