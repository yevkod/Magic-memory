import React from 'react';
import './SingleCard.css';

const SingleCard = ({ card, handleChoise, flipped, disabled }) => {

    const handleClick = () => {
        if (!disabled) {
        handleChoise(card)
        }
    }

    return (
        <div className='card' key={card.id}>
            <div className={flipped ? 'flipped' : ''}>
                <img className='front' src={card.src} alt='card front' />
                <img
                    className='back'
                    onClick={handleClick}
                    src='/img/cover.png'
                    alt='card back'
                />
            </div>
        </div>
    )
}

export default SingleCard