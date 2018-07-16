// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {

  constructor(props) {
    super(props)
    this.state = {secondsLeft: props.initialCount}
  }

  render() {
    const remainingSecs = this.state.secondsLeft
    let output

    if(remainingSecs!==0) {
      output = `${remainingSecs} seconds left before I go boom!`
    } else {
      output = "Boom!"
    }
      return (
        <h3>
          {output}
        </h3>
      )
  }

}
