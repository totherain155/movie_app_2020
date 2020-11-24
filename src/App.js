import React from "react";


class App extends React.Component {

   static = {
      count: 0
   }
   add = () => {
      console.log("plus")
   }
   minus = () => {
      console.log("minus")
   }

   render() {
      return (
         <div>
            <h2>my number is : {this.static.count}</h2>
            <button onClick={this.add}>add</button>
            <button onClick={this.minus}>minus</button>
         </div>
      )
   }
}



export default App;
