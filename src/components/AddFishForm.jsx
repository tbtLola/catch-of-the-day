import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    // our data is going to live in app.js, YOU CAN NEVER PASS DATA UP, BUT YOU CAN ALWAYS PASS DATA DOWN
    createFish = (event) => {
        event.preventDefault();
        // making a fish
        const fish = {
            name: this.nameRef.current.value, 
            price: parseFloat(this.priceRef.current.value), // want it as a float, handles decimals
            status: this.statusRef.current.value, // could be chnaged to a boolean
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }
        this.props.addFish(fish)
        // refresh the form
        event.currentTarget.reset();
    }
    
    render() {
        return (
          <form className="fish-edit" onSubmit={this.createFish}> 
              <input name="name" ref={this.nameRef} type="text" placeholder="Name"/> 
              <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
              <select name="status" ref={this.statusRef}>
                <option value="available">Fresh !</option>
                <option value="unavailable">Sold out!</option>
              </select>
              <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc"></textarea>
              <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
              <button type="submit">+ Add Fish</button>
          </form>  
        );
    }
}

export default AddFishForm;