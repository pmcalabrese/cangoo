import React from 'react'

class Timer extends React.Component {

    componentDidMount() {
        this.timerID = setInterval(
            () => this.props.handleTimer(),
            1000
        );
    }

    render() {
        return (
            <div className='timer'>
                {
                    (this.props.secondsRemaining > 0) ?
                        <h1>{this.props.secondsRemaining}</h1> :
                        null
                }
            </div>
        );
    }
}

export default Timer;