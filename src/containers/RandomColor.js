import React, { Component } from 'react';
import ColorDisplay from '../components/colors/ColorDisplay';

export default class RandomColor extends Component {

  state = {
    color: ''
  };

  randomColor = () => {
    const colors = ['red', 'green', 'black', 'yellow', 'blue', 'purple'];
    const i = Math.floor(Math.random() * colors.length);

    return colors[i];
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ color: this.randomColor() });
    }, 1000);
  }

  render() {
    const { color } = this.state;
    return (
      <>
        <ColorDisplay backgroundColor={color} />
      </>
    );
  }

}
