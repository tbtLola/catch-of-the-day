import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  
  // set property instead of a constructor
  // constructor(){
  //   super();
  //   this.goToStore = this.goToStore.bind(this); // reference this as the go to store as the storepicker
  // }

  myInput = React.createRef();

  // for render can only return one element so move elements into parent element
  // could be an issue if returning multiple flexbox
  // wrap them in a react.fragment tag, allows you to return as many adjacent elements as you want
  // Using react fragmnent will clean up the html, wont have unnecessary divs
  // could either import Fragment with react or import as React.Fragment
  goToStore = event => {
    event.preventDefault(); 
    console.log(this);
  };


  // all the built in methods from react are from the mom component the react componenets
  // other methods are not bound by default so cant simply use this on your own methods
  // so we must bind our own methods
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* comment, jsx does not use // must use curly brace */}
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
// made some changes
