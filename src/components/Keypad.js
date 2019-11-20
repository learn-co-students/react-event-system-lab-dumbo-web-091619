// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {

    handleUp = () => {
        console.log("Entering password...")
    }





    render() {
        return (
            <div>
            <input type="password" onKeyUp={this.handleUp}/>
            </div>
        )
    }
}

export default Keypad
