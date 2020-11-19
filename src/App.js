import React from "react"
import PropTypes from "prop-types";




const foodILike = [{
   id: 1,
   name: "kebap",
   image: "https://media-cdn.tripadvisor.com/media/photo-s/10/46/40/75/sis-kebap.jpg",

}, {
   id: 2,
   name: "fried rice",
   image: "https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg",
   rating: 4
}, {
   id: 3,
   name: "bun cha",
   image: "https://www.196flavors.com/wp-content/uploads/2019/02/bun-cha-2-FP.jpg",
   rating: 5
}]

/*
function renderFood(dish) {

   return <Food name={dish.name} sky={dish.image} />
}
*/


function Food({ name, sky, rating }) {
   return (
      <div>
         <h1>I like {name}</h1>
         <img src={sky} alt={name} />
         <h4>{rating}/5.0</h4>
      </div>  /* image element는 alt prop이 있어야 한다. 
      이는 시각 장애인들을 위한 것이다.*/


   )
}

Food.propTypes = {
   name: PropTypes.string.isRequired,
   sky: PropTypes.string.isRequired,
   rating: PropTypes.string
};





function App() {
   return (
      <div>
         {foodILike.map(dish =>
            <Food key={dish.id}
               name={dish.name}
               sky={dish.image}
               rating={dish.rating} />)}
      </div>
   )
}


export default App;