import react from "react";
import axios from "axios";
import Movie from "./movie";
import "./App.css";


// setState 에서 state 변경한 후 map을 이용하여 rendering 

class App extends react.Component {
   state = {
      isLoading: true,
      movies: []

   }

   //function getMovies 사용 

   getMovies = async () => {


      const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
      //  console.log(movies)
      this.setState({ movies, isLoading: false })
   }

   componentDidMount() {
      this.getMovies()
   }

   render() {

      const { isLoading, movies } = this.state;
      return (
         <section class="container">
            {isLoading ? (
               <div class="loader">
                  <span class="loader__text">Loading...</span>
               </div>
            ) : (
                  <div class="movies">
                     {movies.map(movie => (
                        <Movie
                           key={movie.id}
                           id={movie.id}
                           year={movie.year}
                           title={movie.title}
                           summary={movie.summary}
                           poster={movie.medium_cover_image}
                        />
                     ))}
                  </div>
               )}
         </section>




      );
   }
}

export default App;