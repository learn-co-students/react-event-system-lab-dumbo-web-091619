import React from 'react';

export default class EyesOnMe extends React.Component {

  // constructor(){
  //   super()

  // }

  on_focus_listener = (event) => {
    console.log('Good!')
  }
  
  on_blur_listener = (event) => {
    console.log('Hey! Eyes on me!')
  }

  render(){

    return(
      <button onFocus={ this.on_focus_listener } onBlur={ this.on_blur_listener }></button>
    )
  }

}
