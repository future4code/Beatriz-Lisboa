import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.imagem } alt="teste"/>
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;