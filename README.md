# env-var-validation-example

A basic express.js application which uses [joi](https://www.npmjs.com/package/joi) to validate environment variables on application startup. 

# Getting started

`npm i` to install dependencies 

`cp .env.sample .env` to create the `.env` file

`npm run start` to start the application

# Adding new env vars

When adding new env vars to the `.env` file, include them in the schema defined in `configValidator.js`. This will ensure that they are present on application startup, if they are not the error will be thrown and the application will not start.
