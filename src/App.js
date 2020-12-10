import React from "react";
import { HashRouter, Route } from "react-router-dom";
import home from "./routes/Home";
import about from "./routes/About"
import Navigation from "./components/Navigation"


function App() {
   return (
      <HashRouter>
         <Navigation />
         <Route path="/" exact={true} component={home} />
         <Route path="/about" component={about} />


      </HashRouter>

   )
}



export default App;