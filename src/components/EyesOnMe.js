// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    runWhenFocused = () => {
        console.log("Good!")
    }

    runWhenBlurred = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return(
            <button onFocus={this.runWhenFocused} onBlur={this.runWhenBlurred}></button>
        )
    }
}