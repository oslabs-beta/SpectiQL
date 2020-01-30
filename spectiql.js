const fs = require('fs')
const easygraphqlSchemaParser = require('easygraphql-parser');
const easygraphqlTester = require('easygraphql-tester');
const extension = require('./extension');
const path = require('path');
// function to render our frontend GUI depending on their endpoint
// const renderSpectiQL = (uri) => {
//     return 

//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <title>SpectiQL</title>
//     <meta name="theme-color" content="#00c8c8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     </head>
//     <body>
//     <div>hello!</div>
//     <script>const __gqlapi = ${JSON.stringify(uri)}</script>
//     // <script src="https://dxdw8zdwyvw2r.cloudfront.net/bundle4.js"></script>
//     </body>
//     </html>`

//   }
  // const test = () => {
  //   return easygraphqlTester.test();
  // }

  //sending our GUI to their desired endpoint (URI).
  const config = (uri) => {
    return (request, response) => {
      response.set('Content-Type', 'text/html')
      response.sendFile(path.join(__dirname, "./client/public/index.html"));
    }
  }

  //builds a SDL schema into parsed schema where we can use to get the entire queries of a client's schema
  //filePath needs to be the entire file path. example: /Users/justinkwon/Documents/Codesmith/graphqltest/schema.gql
  //to use: require function into desired file and invoke the function with the entire file path
  //example: createSchema('/Users/justinkwon/Documents/Codesmith/graphqltest/index.js');
  const createSchema = (filePath) => {
    const buildSchema = fs.readFileSync(path.join(__dirname, "schema.gql"), {encoding: 'utf-8'});
    const parsedSchema = easygraphqlSchemaParser(buildSchema);
    return parsedSchema;
  }

  // console.log(createSchema('schema.gql'));
  
  module.exports = { config, createSchema, extension };

  console.log(test());