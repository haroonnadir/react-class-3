import React, { Component } from 'react';

class Person extends Component {
  render() {
    return (
      <div>
        <div>Name: Haroon nadir</div>
        <div> <i>Age: 21 years</i> </div>
      </div>
    );
 
  // return React.createElement(
  //   "div",
  //   { className: "noor" },
  //   React.createElement("i", null, "Welcome Noor")
  // );
  
}
}

export default Person;
