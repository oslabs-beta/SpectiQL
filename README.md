# SpectiQL

SpectiQL is a JavaScript GUI for developers to create test scripts for GraphQL. Our interactive interface simplifies the task of writing tests that checks for the validity of GraphQL queries and mutations. 

If you like our tool and would love to support our team, please don’t forget to star our Github repo above!


Features –
Interactive, easy-to-use GUI that generates boiler plate test scripts
Reads and parses a schema to generate GraphQL mutations and queries
Schema tree visualization with D3 tools
Utilizes EasyGraphQL - an open source tool for GraphQL testing and schema mocking
Save and export test suites into a JavaScript file to be loaded into project

Getting Started 
Install NPM package 



How to use & Demo 
How to configure/import your schema –
Require the methods { config, getSchema, and testSchema } from spectiql into your back-end server after initially setting up your graphql server 

Great! You required the methods in. Now, we have to set up your endpoints to spin up Spectiql on your server. You can do this by setting a get and post request to the endpoint ‘/spectiql’ and calling newSchema and testSchema. Here is an example:

Done? Well, that’s all you have to do on your part - our GUI will take care of the rest. Happy testing!

Generating and Exporting Tests –

Once you import your schema, you can navigate through our application from the top bar and select on either queries or mutations to start creating your test! 
After selecting your specific test from the dropdown, insert your query you would like to test and click on ‘Generate Test’. If you are satisfied with your test, you can click on ‘Add to test suite’ to save it. 
For mutation tests, there is an additional input section for you to add your variables.
You’ve generated your tests - now what? Click export on the top right button of the GUI and it will be downloaded to your browser’s download file path as “spectiql.test.js”. We recognize that it’d be best for developers to choose the export directory, but with modern browser security, it is difficult to offer client-side exporting without additional middleware configuration on your side. 
After clicking export, move the file to your project’s root directory, install jest, and add a test script in your package.json and run it!




Authors –
Jonah Lin
Justin Kwon
Kelly Dekitani
Stanford Dai
	
Shoutouts -
Many thanks to easygraphql for sharing their tool.  Please check out their page and star the github repo!

Licenses –
MIT
