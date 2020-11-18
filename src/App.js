import React from "react";

function Food({name, picture}){
   return (
      <div>
      <h2>I wana have {name}</h2>
      <img src = {picture} />
   </div>
   )
}


const foodILike = [{
    name : "noodle",
    image : 
    "https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19.jpg"
    

},
{
   name : "Fried Chicken",
   image : 
    "https://www.melissassouthernstylekitchen.com/wp-content/uploads/2019/02/SouthernFriedChicken002.jpg"
},{
   name : "beef",
   image : 
   "https://challengedairy.com/sites/default/files/recipe/images/recipe_roast_beef_with_tangy_mustard_sauce_2280.jpg"
}, {
   name : "kebap",
   image : 
   "https://c8.alamy.com/comp/W4TM45/dner-kebap-on-a-plate-W4TM45.jpg"
}
 ]

function App(){
   
   return (
   <div>
        <h1>Welcome !!</h1>
        {foodILike.map(menu => <Food name={menu.name} picture ={menu.image}/> )}
        

   </div>
   
   )
}

export default App;