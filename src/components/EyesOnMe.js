// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{
    focusFunction = () => {
        console.log('Good!')
    }

    blurFunction = () => {
        console.log('Hey! Eyes on me!');
    }


    render(){
        return(
            <div>
                <button onFocus={this.focusFunction} onBlur={this.blurFunction}>Click on me!</button>
            </div>
        )
    }
}


export default EyesOnMe