import React from 'react';
import './card.styles.css';

export const Card = (props => {
    return(
        <div className="card">
            <img alt="user profile" src={`https://robohash.org/${props.person.name}?set=set4`}  />
            <h2>{props.person.name}</h2>
            <p>Mail : <a href={`mailto:${props.person.email}`}>{props.person.email}</a> </p>
        </div>
    )
})