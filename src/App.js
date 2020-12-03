import react from "react";
import axios from "axios";

class App extends react.Component {
   state = {
      isLoading: true,
      movies: []
   }

   getMovies = async () => {
      const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
      //console.log(movies);
      this.setState({ movies, isLoading: false })
      //setState에서 state에 있는 두 개의 상태를 변경하였다. 
   }


   componentDidMount() {
      this.getMovies();
   }

   render() {
      const { isLoading } = this.state;
      return (
         <div>
            {isLoading ? "just a second" : "hey there !"}
         </div>

      )
   }
}



export default App;