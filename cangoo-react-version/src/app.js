import React from 'react'
import KangarooIcon from './assets/kangaroo.png'
import Thingy from "thingy52_web_bluetooth"
import { start } from "./bt";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            playerOne: false,
            playerTwo: false
        }
        // this.connectPlayer = this.connectPlayer.bind(this)
    }

    connectPlayer = (e) => {

        const thingy = new Thingy({ logEnabled: true });

        // ask for name, maybe you can use prompt?
        // player index, name, device
        // const player = new Player(1, "Marco", thingy);
        start(thingy);

        // player.start();

        // player.on("jump", () => {
        //     /**
        //      * {
        //      *      player1: {
        //      *          jump_count:
        //      *          game_state: "waiting_for_device" | "waiting_for_name" | "ready" | "playing" | "gameover-lose" | "gameover-win"   
        //      *      }
        //      * }
        //      */
        // })

        /**
         * NOTE:@Jawad: Should we create a player class where can keep track of its BT devices, name, state, etc etc?
         */

        /**
         * Maybe also use Map for players in the game?
         */

        /**
          * Also a player can exist only if a device is connected
          */

        const player = e.target.value
        this.setState({
            [player]: true
        }, () => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
                <header className='header'>
                    <h1>Cangoo</h1>
                    <h3>The Jumping Game</h3>
                </header>
                <div className='connect-players'>
                    <button
                        value='playerOne'
                        onClick={(e) => this.connectPlayer(e)}>
                        {this.state.playerOne ? "PlayerOne connected" : "Connect Player One"}
                    </button>
                    <button
                        value='playerTwo'
                        onClick={(e) => this.connectPlayer(e)}>
                        {this.state.playerTwo ? "PlayerTwo connected" : "Connect Player Two"}
                    </button>
                </div>
                <div className='race-track'>
                    <div className='race-track-player-one'>
                        {this.state.playerOne ?
                            <img src={KangarooIcon} alt='kangaroo-sprite' /> :
                            <p>Waiting for Player One</p>
                        }
                    </div>
                    <div className='race-track-player-two'>
                        {this.state.playerTwo ?
                            <img src={KangarooIcon} alt='kangaroo-sprite' /> :
                            <p>Waiting for Player Two</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App