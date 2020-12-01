import React from "react";


class App extends React.Component {

   state = {
      count: 0
   }

   add = () => {
      this.setState(mode => ({ count: mode.count + 1 }))
   }

   minus = () => {
      this.setState(mode => ({ count: mode.count - 1 }))
   }

   render() {
      return (
         <div>
            <h2>the number is : {this.state.count} </h2>
            <button onClick={this.add}>add</button>
            <button onClick={this.minus}>minus</button>
         </div>
      )

   }

}




export default App;