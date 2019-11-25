// Code EyesOnMe Component Here
import React, { Component } from 'react';

export class EyesOnMe extends Component {
    handleFocus = () => console.log('Good!')

    handleBlur = () => console.log('Hey! Eyes on me!')
    
    render() {
        return (
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}> Look at me! </button>
            </div>
        );
    }
}

export default EyesOnMe;
