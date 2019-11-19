// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

    successMessage = () => console.log('Entering password...')

    render(){
        return (<div><input type="password" onKeyUp={this.successMessage} /></div>)
    }
}

export default Keypad;