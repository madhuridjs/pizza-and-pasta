import axios from 'axios';
import React , {useState, useEffect} from 'react';
import './ingredients.css';
import { FcApproval } from 'react-icons/fc';

const Items = ({ match }) => {

    const [ingredients, setIngredients] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetchIngredients()
        console.log(ingredients);
    },[match.params.id])
    
    const fetchIngredients = () => {
        setIsLoading(false);
      axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${match.params.id}`)
        .then (res => {
            //const ingredients = res.data.recipe;
            setIsLoading(true);
            setIngredients(res.data.recipe);
            console.log(ingredients);
        });
    };
    return(
        <>
            {isLoading ? 
            <section className= "ingredients_container">
                <div className= "ingredients_sub">
                    <img className= "ingredients_image" src = {ingredients.image_url} />
                    <h2 className= "ingredients_title">{ingredients.title}</h2>
                    </div>
                    <button>Fav</button>
                    <ul className= "ingredients_list">
                        {ingredients.ingredients && ingredients.ingredients.map(item => {
                            return(
                                <li className= "ingredients_list_items"><FcApproval style= {{fill:"white"}}/>{item}</li>
                            )
                        })}
                    </ul> 
            </section> : <div className= "ingredients_loading">Loading...</div>}
       

        </>
    )
    }
    

export default Items;