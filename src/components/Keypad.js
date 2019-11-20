// Code Keypad Component Here
import React, { Component } from 'react';

export class Keypad extends Component {

    typing = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.typing} type='password' />
            </div>
        );
    }
}

export default Keypad;
