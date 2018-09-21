import React from 'react'
import KangarooIcon from './../assets/kangaroo.png'

class Kangaroo extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         jumpCount: 0,
    //         name: this.props.player.name
    //     }
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(this.state)
    //     this.props.handleStartButtonDisplay()
    // }

    render() {
        // const player = this.props.player.name.toLowerCase().split(' ').join('-')
        return (
            <div>
                {this.props.player.connected ?
                    <div>
                        <div className='player-data'>
                            {/* <form onSubmit={this.handleSubmit}>
                                <input className='player-name'
                                    type='text'
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                ></input> */}
                            <p>{this.props.player.name}</p>
                            <p>{this.props.player.jumpCount}</p>
                            {/* </form> */}
                        </div>
                        <img className='kangaroo' id={this.props.player.id} src={KangarooIcon} alt='kangaroo-sprite' />
                    </div> :
                    <p>Waiting for {this.props.player.name}</p>
                }
            </div>
        )
    }
}

export default Kangaroo