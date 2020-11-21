import React from "react";

function Music({ name, artist, rating }) {
   return (
      <div>
         <h2> I like {name} </h2>
         <img src={artist} alt={name} />
         <h3> {rating} / 5.0</h3>
      </div>


   )
}

const MusicILike = [{
   id: 1,
   name: "Stranger in Moscow",
   artist: "https://i.ytimg.com/vi/t6Ke4uD7CJc/hqdefault.jpg",
   rating: 4.5
}, {
   id: 2,
   name: "Faith",
   artist: "https://ychef.files.bbci.co.uk/976x549/p08qvzz5.jpg",
   rating: 4
}, {
   id: 3,
   name: "Rocket Man",
   artist: "https://www.udiscovermusic.com/wp-content/uploads/2020/03/Elton-John-Made-In-England-album-cover-820-820x600.jpg",
   rating: 4.7
}]



function App() {
   return (
      <div>
         {MusicILike.map(groove =>
            <Music key={groove.id}
               name={groove.name}
               artist={groove.artist}
               rating={groove.rating} />
         )
            //funciton, return 생략

         }
      </div>
   )
}



export default App;



