import React from 'react';
export default class EyesOnMe extends React.Component {
  f = () => {
    console.log("Good!")
  }
  b = () => {
    console.log("Hey! Eyes on me!")
  }
  render(){
    return(
      <button onFocus={this.f} onBlur={this.b}></button>
    )
  }
}
