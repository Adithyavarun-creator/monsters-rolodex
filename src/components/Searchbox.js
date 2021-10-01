import React from 'react'
import './Searchbox.styles.css'

const Searchbox = ({placeholder,handlechange}) =>{
    return(
    <input 
    className="search"
    type="search" 
    placeholder={placeholder}
    onChange={handlechange}/>
    )
}

export default Searchbox