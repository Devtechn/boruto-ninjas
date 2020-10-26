import React from 'react'

import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://raw.githubusercontent.com/Devtechn/boruto-ninjas/master/public/ninjas-pics/${props.ninja.id}.jpeg`} alt={props.ninja.name} height="160px"/>
        <h2>{props.ninja.name}</h2>
    </div>
    
)
