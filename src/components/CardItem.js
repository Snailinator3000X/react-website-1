//Modules
import React from 'react'
import { Link } from 'react-router-dom'




function CardItem(props){
    return(
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt={props.alt} className="cards__item__item" height="200" width="300"/>
                    </figure>
                    <div className="cards__intem__info">
                        <h5 className="cards__item__text">
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )

}

export default CardItem