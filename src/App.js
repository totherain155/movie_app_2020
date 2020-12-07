import React from "react";
import axios from "axios";
import Movie from "./movie";

class App extends React.Component {

   state = {
      isLoading: true,
      movies: []
   }

   getMovies = async () => {
      const { data:
         { data:
            { movies }
         }
      } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      // console.log(movies);
      this.setState({ movies: movies, isLoading: false })
   }

   componentDidMount() {
      this.getMovies();
   }

   render() {
      const { isLoading, movies } = this.state

      return (
         <section className="container">
            {isLoading ?
               <div className="loader">
                  <span className="loader_text">Loading...</span>
               </div>
               :
               <div className="movies">
                  {movies.map(art =>
                     <Movie key={art.id}
                        title={art.title}
                        year={art.year}
                        summary={art.summary}
                        poster={art.medium_cover_image}
                        genres={art.genres}


                     />)}
               </div>
            }
         </section>
      )
   }
}


export default App;