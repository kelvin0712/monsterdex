import React from 'react';
import {Card} from '../cards/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
    return (
        <div className="card-list">
           {props.monsters.map(el => (
             <Card key={el.id} monster={el}/> 
          ))}
        </div>
    )
} 