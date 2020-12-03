import react from "react";
import axios from "axios";
import Movie from "./movie";

class App extends react.Component {
   state = {
      isLoading: true,
      movies: []
   }

   getMovies = async () => {
      const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
      //console.log(movies);
      this.setState({ movies, isLoading: false })
      //setState에서 state에 있는 두 개의 상태를 변경하였다. 
   }


   componentDidMount() {
      this.getMovies();
   }

   render() {
      const { isLoading, movies } = this.state; //state로부터 movies를 가져와야 한다.
      return (
         <div>
            {isLoading ? "just a second" : movies.map(movie =>
               <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image} />
            )}
         </div>

      )
   }
}



export default App;