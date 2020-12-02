import React from "react";

class App extends React.Component {
   state = {
      isLoading: true
   }

   componentDidMount() {
      setTimeout(() => {
         this.setState({ isLoading: false })
      }, 5000)
   }
   render() {
      return (
         <div>
            <h4>{this.state.isLoading ? "loading" : "finished"}</h4>
         </div>
      )
   }
}





export default App;