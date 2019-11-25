// Code Keypad Component Here
import React, { Component } from 'react';

export class Keypad extends Component {
    inputResponse = () => {
        console.log("Entering password...")
    }
    
    render() {
        return (
            <div>
                <input onKeyUp={this.inputResponse} type="password" />
            </div>
        );
    }
}

export default Keypad;
