import React from 'react'

const StartButton = (props) => {
    return (
        <div className='start-button-container'>
            <button className='start-button'
                onClick={props.handleClick}>START</button>
        </div>
    )
}

export default StartButton