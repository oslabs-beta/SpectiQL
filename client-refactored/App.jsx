import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./public/styling/index.css";
import "animate.css/animate.min.css";

import Mutation from "./Containers/MutationContainer.jsx";
import Query from "./Containers/QueryContainer.jsx";
import NavBar from "./Components/NavBar.jsx";
// import SchemaTreeD3 from "./Components/schemaTreeD3.jsx";
import TestSuites from "./Components/TestSuites.jsx";
import LandingPage from "./Components/LandingPage.jsx";

function App() {
  const [landingPage, setLandingPage] = useState(true);
  const [filePath, setFilePath] = useState("");
  const [schema, setSchema] = useState({});

  function handleNextClick() {
    setLandingPage(false);
    // fetch("/spectiql", {
    //   method: "POST",
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setFilePath(response.filePath);
    //     setSchema(response.schema);
    //   })
    //   .catch((err) => console.log(err));
  }

  return (
    <HashRouter>
      <div className="fullscreen">
        <div className="mainContainer">
          <div className="landingPage">
            {landingPage && <LandingPage handleNextClick={handleNextClick} />}
          </div>

          <div className="mainNavBar">
            <NavBar filePath={filePath} />
          </div>

          <div className="queryVisualizer">
            <h1>Schema Tree Placeholder</h1>
            {/* <SchemaTreeD3 schema={schema} /> */}
          </div>

          <div className="testSuites">
            <TestSuites />
          </div>

          <Switch>
            <Route path="/queries" exact>
              <Query schema={schema}/>
            </Route>
            <Route path="/mutations" exact>
              <Mutation />
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
