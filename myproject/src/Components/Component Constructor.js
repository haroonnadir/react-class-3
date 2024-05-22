import React from 'react';

class Car extends React.Component {
  // The constructor is used to initialize the state of the component
  constructor() {
    super(); // Calls the constructor of the parent class (React.Component)
    this.state = { color: "red" }; // Initializes the state with a color property set to "red"
  }

  // The render method returns the JSX that will be rendered to the DOM
  render() {
    return <h2>I am a Car!</h2>; // Returns an <h2> element with the text "I am a Car!"
  }
}

export default Car; // Exports the Car component so it can be used in other files
