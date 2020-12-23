import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Alle Tipps und Tricks!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="https://images.unsplash.com/photo-1541519336688-ff7223c567a3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2134&q=80"
                            text="Explore Nepal"
                            label="Adventure"
                            path='/services'
                            alt='Touri shit'
                        />
                        <CardItem
                            src="https://images.unsplash.com/photo-1508876000213-a64c7910fa29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            text="Dude"
                            label="Adventure"
                            path='/services'
                            alt='Touri shit'
                        />   
                        <CardItem
                            src="https://images.unsplash.com/photo-1518610876091-4b42fd67b00e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            text="Perle"
                            label="Adventure"
                            path='/services'
                            alt='Touri shit'
                        />      
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="https://images.unsplash.com/photo-1508876000213-a64c7910fa29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            text="Dude"
                            label="Adventure"
                            path='/services'
                            alt='Touri shit'
                        />   
                        <CardItem
                            src="https://images.unsplash.com/photo-1518610876091-4b42fd67b00e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            text="Perle"
                            label="Adventure"
                            path='/services'
                            alt='Touri shit'
                        />      
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
