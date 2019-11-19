// Code EyesOnMe Component Here

import React from 'react';

class EyesOnMe extends React.Component {


    goodMessage = () => console.log("Good!")

    heyMessage = () => console.log("Hey! Eyes on me!")

    render(){
        return(<button onFocus={this.goodMessage} onBlur={this.heyMessage}></button>)
    }
}

export default EyesOnMe;

