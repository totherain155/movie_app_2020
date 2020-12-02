import react from "react";



class App extends react.Component {

   state = {
      isLoading: true
   }


   componentDidMount() {
      setTimeout(() => {
         this.setState({ isLoading: false })
      }, 5000)
   }

   render() {
      return (<div>
         <h3>{this.state.isLoading ? "please wait a litte more" : "welcome :)"}</h3>
      </div>
      )
   }
}





export default App;