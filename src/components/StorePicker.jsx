import React, { Fragment } from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    // for render can only return one element so move elements into parent element
    // could be an issue if returning multiple flexbox 
    // wrap them in a react.fragment tag, allows you to return as many adjacent elements as you want
    // Using react fragmnent will clean up the html, wont have unnecessary divs
    // could either import Fragment with react or import as React.Fragment
    render() {
        return (
            <form className="store-selector">
                { /* comment, jsx does not use // must use curly brace */ }
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;
// made some changes
