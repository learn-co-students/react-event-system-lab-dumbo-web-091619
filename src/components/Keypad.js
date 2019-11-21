// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{
    typeWords = () => {
        console.log('Entering password...');
    }
    render(){
        return(
            <div>
                <input onKeyUp={this.typeWords} type='password'/>
            </div>
        )
    }
}


export default Keypad