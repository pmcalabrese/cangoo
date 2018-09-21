import React from 'react'

const ConnectButton = (props) => {
    return (
        props.player.connected ? null
            : <button
                name={props.player.name}
                value={props.player.name === 'Player One' ? 'playerOne' : 'playerTwo'}
                onClick={(e) => props.connectPlayer(e)}>
                Connect {props.player.name}
            </button>
    )
}

export default ConnectButton