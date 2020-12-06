
import react from "react";
import axios from "axios";
import Movie from "./movie";



class App extends react.Component {

   state = {
      isLoading: true,
      movies: []
   }

   getMovies = async () => {

      const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json")
      //  console.log(movies)
      this.setState({ movies: movies, isLoading: false })
   }

   componentDidMount() {
      this.getMovies();
   }

   render() {

      const { isLoading, movies } = this.state;

      return (
         <section class="container">

            {isLoading ?
               <div class="Loader">
                  <span class="loader_text">Loading...</span>
               </div>
               :
               <div class="movies">
                  {movies.map(movie =>
                     <Movie key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        poster={movie.medium_cover_image}
                        summary={movie.summary}

                     />)}
               </div>}
         </section>
      )
   }

}


export default App;
