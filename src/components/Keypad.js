import React from 'react';

export default class Keypad extends React.Component {

  // constructor(){
  //   super()

  // }

  on_key_up_listener = (event) => {
    console.log('Entering password...')
  }

  render(){
    return(
      <input type="password" onKeyUp={ this.on_key_up_listener } />
    )
  }

}
