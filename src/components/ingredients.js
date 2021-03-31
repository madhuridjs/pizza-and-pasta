import axios from 'axios';
import React , {useState, useEffect} from 'react';
import './ingredients.css';

const Items = ({ match }) => {

    const [ingredients, setIngredients] = useState({});
    
    useEffect(() => {
        fetchIngredients()
        console.log(ingredients);
    },[match.params.id])
    
    const fetchIngredients = () => {
      axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${match.params.id}`)
        .then (res => {
            //const ingredients = res.data.recipe;
            setIngredients(res.data.recipe);
            console.log(ingredients);
        });
    };
    return(
        <>
            <section className= "ingredients_container">
                <div className= "ingredients_sub">
                    <img className= "ingredients_image" src = {ingredients.image_url} />
                    <h2 className= "ingredients_title">{ingredients.title}</h2>
                    </div>
                        
                    <ul>
                        {ingredients.ingredients && ingredients.ingredients.map(item => {
                            return(
                                <li>{item}</li>
                            )
                        })}
                    </ul>
               
            </section>
        
        </>
    )
    }
    

export default Items;