// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
  // constructor () {
  //   super()

  // }

  triggerOnFocus = () => console.log('Good!')
  triggerOnBlur = () => console.log('Hey! Eyes on me!')

  render () {
    return (
      <button onFocus={this.triggerOnFocus} onBlur={this.triggerOnBlur} />
    )
  }
}
