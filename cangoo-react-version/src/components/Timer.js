import React from 'react'

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            secondsRemaining: 5
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick = () => {
        this.setState({
            secondsRemaining: this.state.secondsRemaining - 1
        });
    }

    render() {
        return (
            <div className='timer'>
                {
                    (this.state.secondsRemaining > 0) ?
                        <h1>{this.state.secondsRemaining}</h1> :
                        <h1>GAME OVER!!!</h1>
                }
            </div>
        );
    }
}

export default Timer;