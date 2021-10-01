import React from 'react'
import './Cardlist.styles.css'
import Card from './Card';

const Cardlist = (props) =>{
    //console.log(props);
    return (
        <div className="card-list">
           {props.monsters.map((monster)=>(
          <Card key={monster.id} monster={monster}/>
        ))}
        </div>
    )
}

export default Cardlist