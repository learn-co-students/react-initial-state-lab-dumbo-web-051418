// your Bomb code here!
import React from 'react';
import ImageSlider from './ImageSlider';

export default class Bomb extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
      if (this.state.secondsLeft > 0) {
      return <h3>{this.state.secondsLeft} seconds left before I go boom!</h3>
    } else {
      return <h3>Boom!</h3>
    }
  }
}

Bomb.defaultProps = {
  initialCount: 120
}
