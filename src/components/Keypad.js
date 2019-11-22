// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

    onKeyPressed = () => console.log('Entering password...')

    render (){

       return <input 
       type='password'
       onKeyUp={this.onKeyPressed} />
    }
}

export default Keypad
