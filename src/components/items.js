import {Link} from "react-router-dom";
import axios from 'axios';
import React , {useState, useEffect} from 'react';


const Items = ({items}) => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetchIngredients()
        // console.log(match);
    },[])

    const fetchIngredients = () => {

      axios.get(`https://forkify-api.herokuapp.com/api/get`)
        .then (res => {
            setIngredients(res.data.recipe.ingredients)
            console.log(res.data.recipe.ingredients);
        })
    }
    return(
        <Link to= {`/Items/${items.recipe_id}`}>
            <div key = {items.recipe_id} className= "items_container">
                <img className= "item_image" src = {items.image_url}/>
                <ul className= "items">
                    <li className= "item_title">{`${items.title.substring(0,10)}...`}</li>
                    <li className= "item_pub">{items.publisher}</li>
                </ul>
            </div>
        </Link>   
    )
}
export default Items;