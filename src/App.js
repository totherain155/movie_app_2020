import React from "react";

class App extends React.Component {

   state = {
      count: 0
   }

   add = () => {
      console.log("add")
   }

   minus = () => {
      console.log("minus")
   }

   render() {
      return (
         <div>
            <h3>the number is : {this.state.count}</h3>
            <button onClick={this.add}>add</button>
            <button onClick={this.minus}>minus</button>
         </div>
      )
   }

}



export default App;