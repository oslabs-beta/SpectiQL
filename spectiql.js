const fs = require('fs');
const easygraphqlSchemaParser = require('easygraphql-parser');
const extension = require('./extension');
const path = require('path');
  
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
    const buildSchema = fs.readFileSync(filePath, {encoding: 'utf-8'});
    const parsedSchema = easygraphqlSchemaParser(buildSchema);
    return parsedSchema;
  }

  const getSchema = (filePath) => {
    const parsedSchema = createSchema(filePath);
    console.log(parsedSchema);
    return (request, response) => {
      response.set('Content-Type', 'text/html');
      response.status(200).json({ schema: parsedSchema});
    }
  }


  
  module.exports = { config, extension, getSchema };