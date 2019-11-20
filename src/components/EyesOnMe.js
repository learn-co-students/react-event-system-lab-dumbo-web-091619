// Code EyesOnMe Component Here
import React, { Component } from 'react';

export class EyesOnMe extends Component {

    good = () => {
        console.log('Good!')
    }

    bad = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button onFocus={this.good} onBlur={this.bad}>A Button</button>
            </div>
        );
    }
}

export default EyesOnMe;
