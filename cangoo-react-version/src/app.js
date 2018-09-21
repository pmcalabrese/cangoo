// WORKING ON MOVING THE KANGAROO ACROSS THE SCREEN IN RESPONSE TO THE JUMP

import React from 'react'
import ConnectButton from './components/ConnectButton'
import StartButton from './components/StartButton'
import Timer from './components/Timer'
import Kangaroo from './components/Kangaroo'
// import Thingy from "thingy52_web_bluetooth"
// import { start } from "./thingy/bt";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            playerOne: {
                id: 'player1',
                name: 'Player One',
                connected: false,
                jumpCount: 0,
                x: null
            },
            playerTwo: {
                id: 'player2',
                name: 'Player Two',
                connected: false,
                jumpCount: 0,
                x: null
            },
            displayStartButton: 0,
            displayTimer: false,
            gameStatus: 'ready'
        }
    }

    jump = (e) => {
        if (e.keyCode === 39) {
            this.setState({
                playerOne: { ...this.state.playerOne, jumpCount: this.state.playerOne.jumpCount + 1 }
            })

        }

        if (e.keyCode === 67) {
            this.setState({
                playerTwo: { ...this.state.playerTwo, jumpCount: this.state.playerTwo.jumpCount + 1 }
            })
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.jump)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.jump)
    }

    handleStartButtonClick = () => {
        this.setState({
            displayTimer: true,
            displayStartButton: 0
        })
    }

    // handleStartButtonDisplay = () => {
    //     this.setState({
    //         displayStartButton: this.state.displayStartButton + 1
    //     })
    // }


    connectPlayer = (e) => {
        const player = e.target.value

        this.setState({
            [player]: {
                ...this.state[player],
                connected: true
            },
            displayStartButton: this.state.displayStartButton + 1
        }, () => {
            console.log(this.state[player])
        })
    }

    render() {
        return (
            <div>
                <header className='header'>
                    <h1>Cangoo</h1>
                    <h3>The Jumping Game</h3>
                </header>

                {(this.state.displayStartButton === 2) && <StartButton handleClick={this.handleStartButtonClick} />}

                {(this.state.displayTimer) && <Timer />}

                <ConnectButton player={this.state.playerOne}
                    connectPlayer={this.connectPlayer}
                />
                <ConnectButton player={this.state.playerTwo}
                    connectPlayer={this.connectPlayer}
                />

                <div className='race-track'>
                    <Kangaroo player={this.state.playerOne}
                    />
                    <Kangaroo player={this.state.playerTwo}
                    />
                </div>
            </div >
        )
    }
}

export default App