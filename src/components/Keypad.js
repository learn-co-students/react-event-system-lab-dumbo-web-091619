import React, { Component } from 'react';

class Keypad extends Component {
    
    inputPassword =  () => console.log('Entering password...')

    render() {
        return (
            <div>
                <input 
                    type="password"
                    onKeyUp={this.inputPassword}
                />
            </div>

        )
    }
}

export default Keypad 