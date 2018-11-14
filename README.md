# pNg
```pNg``` is a simple application that generates random phone numbers and stores the numbers in a .txt file. 

## Dependencies
The functionality of this web app being a node.js app depends on the following technologies.

[**Express.js**](https://expressjs.com/): A Fast, opinionated, minimalist web framework for node which was used in routing this application.  
[**BodyParser**](https://babeljs.io/): This module was used to collect search data sent from the client side to the routing page.   
[**Babel**](https://babeljs.io/): This project is written in ES6, babel transpiles the code to ES5.  
[**Sequelize**](https://www.sequelizejs.com): Sequelize is a promise-based Node.js ORM for Postgres Server which is the database server for the APP . It features solid transaction support, relations, read replication and more.   
[**Postgresql**](https://www.postgresql.org/): PostgreSQL is a powerful, open source object-relational database system.  
[**Webpack**](https://webpack.js.org/): webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in browser, it is also used for transpiling scss to css.  
[**React**](https://facebook.github.io/react/): A javascript library for building user interfaces.


## Installation

1. Install nodejs if not installed.
2. Navigate to the directory you want it installed to. cd your folder
3. Clone the repository ``` https://github.com/EmaEvidence/png.git ```.
5. Open the png folder.
6. Create a .env file using the .envexample as a guide.
7. ``` npm install ``` to install all dependencies.
8. ``` npm run dev-build ``` to build the app.
9. ``` npm start-all ``` starts the app.
10. The app runs on port 3300
11. ``` npm run test ``` runs the client-side test.
12. ``` npm run server-test ``` runs the server-side test
13. The API can be consumed with postman.

## The API.
The API exposes the following endpoints for consumption:  
  1. ```POST``` /numbers. Takes no parameter, it generates new random phone Numbers 
  2. ```GET``` /all_numbers. The API takes no parameter, returns a list of all generated phone numbers. 
  3. ```GET``` /numbers. Returns the number and details of all completed jobs.

## Test  
API test is written with ``` jasmine ``` and ``` supertest ```.
Frontend tests is written with ``` jest ``` and ``` enzyme ```.

## Limitations.
The generated files are not downloadable yet.


## How to Contribute
The project is open for contribution. You can start by making generated number files downloadable. If you have other improvements you want to add, feel free to do so. Ensure you follow style guide and visit the wiki page for a guide as regards project convention
[wiki](https://github.com/EmaEvidence/PostIt/wiki)

## FAQ
#### To which branch should I raise a PR?   
``` Every PR is to be raised against development branch. ```   
