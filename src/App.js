import React from "react";
import { HashRouter, Route } from "react-router-dom";
import about from "./routes/About";
import home from "./routes/Home";
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation"
import "./App.css"

function App() {
   return <HashRouter>
      <Navigation />
      <Route path="/about" component={about} />
      <Route path="/" exact={true} component={home} />
      <Route path="/movie/:id" component={Detail} />
   </HashRouter >
}


export default App;