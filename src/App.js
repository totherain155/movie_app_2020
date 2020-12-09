import React from "react";
import { HashRouter, Route } from "react-router-dom";
import potato from "./routes/About.js"
import home from "./routes/Home.js"


function App() {
   return <HashRouter>
      <Route path="/" exact={true} component={home} />
      <Route path="/about" component={potato} />
   </HashRouter>
}


export default App;