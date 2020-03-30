<h1> SpectiQL </h1>

SpectiQL is a JavaScript Graphical User Interface(GUI) for developers to easily create GraphQL tests. Our interactive interface simplifies the task of writing tests that checks GraphQL queries & mutations against a schema. 

If you like our tool and would love to support our team, please don’t forget to star our Github repo above!

<h2> Overview </h2>
<h3> Features </h3>

- Interactive & user-friendly GUI spun up on endpoint /spectiql
- Create, Edit, or Delete GraphQL test suites within GUI
- Ability to generate ready-to-run test scripts with Jest
- Save & export (.js) test file into your project directory
- D3 Schema tree visualization
- Utilizes <a href="https://easygraphql.com/">EasyGraphQL</a> - an open source project containing tools that help simplify GraphQL (<a href="https://github.com/EasyGraphQL">github</a>)

<h2> Getting Started </h2>
	
<h3> Installation </h3>
	
- install SpectiQL
<pre> <code>npm i spectiql@5.2.0</code> </pre>

- install Jest
<pre> <code>npm i jest --save-dev</code> </pre>


<h3> Configuration </h3>
1. Import & configure your server by pasting in the following:
<br></br>
<pre>const { config, getSchema, testSchema } = require('spectiql');
const spect = config();
const getSchema = getSchema('#enter schema file path');
</pre>  

2. Great! You've required the methods in. Now, we have to set up your endpoints to spin up SpectiQL on your server. You can do this by setting a get and post request to the endpoint ‘/spectiql’ and calling spect & getSchema. Example:

<pre>app.get('/spectiql', spect);
app.post('/spectiql', getSchema);
</pre>  

<h3>Generating and Exporting Tests</h3>

1. To generate tests, simply select a type of GraphQL query (queries, mutations, subscriptions) at the top sidebar. After selecting a test type, you can give your tests a name and description by populating the test suites and test description fields. This will be helpful to refer back to specific tests!

2. Select a specific test type (valid/invalid field, input, datatype) that you'd like to test for.

3. Enter your query that you'd like to test - the schema tree displays the possible inputs, fields, and types based on provided schema. 

4. Click Generate Tests, and if the tests look good, Add to Test Suite! If you want to edit them later on, you can simply click "Edit Test" on the specific test suite card created.

5. After you've completed constructing all your test suites, click on the "Export" button on the upper right corner on the screen. The test file will be saved as "spectiql.test.js". Simply drag the test file into your project root directory, and run the script with jest!




<h2>Authors</h2>

<p> Jonah Lin <a href="https://github.com/linjonah">@linjonah</a> </p>

<p>Justin Kwon <a href="https://github.com/jkwonny">@jkwonny</a> </p>

<p>Kelly Dekitani <a href="https://github.com/kairiD">@kairiD</a> </p>

<p>Stanford Dai <a href="https://github.com/Dais002">@dais002</a> </p>

<h2>License</h2>

This project is licensed under the MIT License - see the LICENSE file for details.
