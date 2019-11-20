import React, { Component } from 'react';

class Keypad extends Component {

  keyPress = (event) => {
    console.log("Entering password...")

  }

  render() {
    return (
      <div>
      <label>Enter Password </label>
      <input onKeyUp={this.keyPress} type="password" />
      </div>
    );
  }

}

export default Keypad;
