import React from 'react';
import './card.style.css';


export const Card = (props) => (

    <div className="card-container">
        <img src={`https://robohash.org/${props._monster.id}?set=set2&size=180x180`} alt="monster"/>
        <h2> {props._monster.name}
        </h2>
        <p>{props._monster.email}</p>
    </div>


)