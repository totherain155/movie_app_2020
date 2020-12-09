import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Potato from "./routes/About";
import Home from "./routes/Home";


function App() {
   return <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={Potato} />
   </HashRouter>
}

export default App;