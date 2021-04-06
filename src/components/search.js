import axios from 'axios';
import React, { useEffect, useState } from'react';
import './search.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Items from './items';
import {useDispatch} from "react-redux";
import { setRecipes } from '../redux/Actions/actions';

function App() {
    const [result,setResult] = useState([]);
    const[items, setItems] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData() 
    },[])
    const fetchData = () => {
        axios.get(`https://forkify-api.herokuapp.com/api/search?q=${items}`).then(res => {
            setResult(res.data.recipes);
            console.log(res.data.recipes);
            dispatch(setRecipes(res.data.recipes));
        })   
      
    }

    return(
        <>
            <section>
                    <div className= "search_container">
                        <input
                            className= "search_input" 
                            type = "text"
                            placeholder = "Search over 1,000,000 recipes..."
                            onChange = {event => setItems(event.target.value)}
                        />
                        <button className= "search_btn" onClick = {fetchData}>
                            <AiOutlineSearch className= "search_icon"/>SEARCH
                        </button>
                        <h1 className= "logo">P&amp;P</h1>
                    </div>
                        {result.map(items => {
                        return(
                           <Items items = {items}/>
                        )
                    })}
            </section>
        </>
    )
}
export default App;