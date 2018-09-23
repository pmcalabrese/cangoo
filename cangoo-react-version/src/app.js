import React from 'react'
import ConnectButton from './components/ConnectButton'
import StartButton from './components/StartButton'
import Timer from './components/Timer'
import Kangaroo from './components/Kangaroo'
import GameResult from './components/GameResult'
// import FinishLine from './assets/finish-line.png'
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
                top: 320,
                left: 178
            },
            playerTwo: {
                id: 'player2',
                name: 'Player Two',
                connected: false,
                jumpCount: 0,
                top: 498,
                left: 178
            },
            displayStartButton: 0,
            timer: {
                displayTimer: false,
                secondsRemaining: 5
            },
            gameStatus: 'waiting', // || 'ready' \\ 'in-progress' \\ 'game-over'
            gameResult: 'GAME RESULT'
        }
    }

    jump = (e) => {
        if (this.state.gameStatus === 'in-progress') {
            if (e.keyCode === 39) {
                this.setState({
                    playerOne: {
                        ...this.state.playerOne,
                        jumpCount: this.state.playerOne.jumpCount + 1,
                        left: this.state.playerOne.left + 5
                    }
                })
            }

            if (e.keyCode === 67) {
                this.setState({
                    playerTwo: {
                        ...this.state.playerTwo,
                        jumpCount: this.state.playerTwo.jumpCount + 1,
                        left: this.state.playerTwo.left + 5
                    }
                })
            }
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
            timer: {
                ...this.state.timer,
                displayTimer: true
            },
            displayStartButton: 0,
            gameStatus: 'in-progress'
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

    handleTimer = () => {
        // we want this function to do two things: manage the countdown and change game status based on countdown status
        this.state.timer.secondsRemaining > 0 ? this.setState({
            timer: {
                ...this.state.timer,
                secondsRemaining: this.state.timer.secondsRemaining - 1
            }
        }) :
            this.setState({
                timer: {
                    ...this.state.timer,
                    secondsRemaining: 0,
                },
                gameStatus: 'game-over'
            }, () => {
                this.handleGameResult()
            })
    }

    handleGameResult = () => {
        let p1 = this.state.playerOne
        let p2 = this.state.playerTwo
        if (this.state.gameStatus === 'game-over') {
            if (p1.jumpCount > p2.jumpCount) {
                this.setState({ gameResult: `${p1.name} wins!!!` })
            }
            if (p1.jumpCount === p2.jumpCount) {
                this.setState({ gameResult: `It's a Draw!!` })
            }
            if (p1.jumpCount < p2.jumpCount) {
                this.setState({ gameResult: `${p2.name} wins!!!` })
            }
        }
    }

    render() {
        return (
            <div>
                <header className='header'>
                    <h1>Cangoo</h1>
                    <h3>The Jumping Game</h3>
                </header>

                {(this.state.displayStartButton === 2) && <StartButton handleClick={this.handleStartButtonClick} />}

                {(this.state.timer.displayTimer) && <Timer
                    handleTimer={this.handleTimer}
                    secondsRemaining={this.state.timer.secondsRemaining}
                />}
                {(this.state.gameStatus === 'game-over') && <GameResult gameResult={this.state.gameResult} />}
                <div className='connect-players'>
                    <ConnectButton
                        player={this.state.playerOne}
                        connectPlayer={this.connectPlayer}
                    />
                    <ConnectButton
                        player={this.state.playerTwo}
                        connectPlayer={this.connectPlayer}
                    />
                </div>
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