import React from 'react';
export default class Keypad extends React.Component {
  sa = () => {
    console.log("Entering password...")
  }
  render(){
    return(
      <input onKeyUp={this.sa} type="password" />
    )
  }
}
