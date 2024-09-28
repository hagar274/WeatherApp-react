import React from "react";
import { FaSearch } from 'react-icons/fa';


const Form = (props) =>{
            return(
               <>
                 <form onSubmit={props.getWeather}>
                    <input type="text" name="city" placeholder="City..." />
                    <input type="text" name="country" placeholder="Country..." />
                    <button>Get Weather 
                        <span><FaSearch /> </span>
                        </button>
                 </form>
               </>
            );
    }


export default Form;