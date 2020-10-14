import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className="littlecard-container">
            <div>
                <img src={ props.image }/>
                <p><span>{props.option}</span>{props.adress}</p>
            </div>
        </div>
    )

}
export default CardPequeno;