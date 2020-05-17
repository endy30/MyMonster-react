import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component';

export const CardList = (props) => (
    
     <div className="card-list">
            {props.Monsteritems.map(monster =>(
          <Card key={monster.id} _monster = {monster}/>
          ))}

     </div>
);