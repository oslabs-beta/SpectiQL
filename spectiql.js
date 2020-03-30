const fs = require("fs");
const easygraphqlSchemaParser = require("easygraphql-parser");
const EasyGraphQLTester = require("easygraphql-tester");
const extension = require("./extension");
const path = require("path");

const config = () => {
  return (request, response) => {
    response.set("Content-Type", "text/html");
    response.sendFile(path.join(__dirname, "./build/index.html"));
  };
};

const createSchema = filePath => {
  const buildSchema = fs.readFileSync(filePath, { encoding: "utf-8" });
  const parsedSchema = easygraphqlSchemaParser(buildSchema);
  return parsedSchema;
};

const getSchema = filePath => {
  const parsedSchema = createSchema(filePath);
  const testInstance = testSchema(filePath);
  return (request, response) => {
    response.set("Content-Type", "text/html");
    response
      .status(200)
      .json({
        filePath: filePath,
        testInstance: testInstance,
        schema: parsedSchema
      });
  };
};

const testSchema = filePath => {
  const parsedSchema = fs.readFileSync(filePath, { encoding: "utf-8" });
  const testInstance = new EasyGraphQLTester(parsedSchema);
  return testInstance;
};

module.exports = { config, getSchema, testSchema, extension };
