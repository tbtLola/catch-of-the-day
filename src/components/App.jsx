import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

// methods that update state must live in the same component as where the state lives
class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate our localstorage
    const localStorageRef = localStorage.getItem(params.storeId)
    if(localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)});
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  
  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }
  
  // use this to prevent memoryleak , must clean up afterwards
  componentWillUnmount() {
    base.removeBinding(this.ref);
}

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to order or update the number in the order
    order[key] = order[key] + 1 || 1;
    // 3. Call set state to update our state object
    this.setState({ order });
  };

  addFish = fish => {
    // Updating state
    // 1. Take a copy of existing state (you dont want to modify the actual state)
    const fishes = { ...this.state.fishes }; // takes a copy of everything
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish; // randomly generating a unique key
    // 3. Set the new fishes object to state
    // only need to update the pieces that we only need
    this.setState({
      fishes
    });
  };

  updateFish = (key, updatedFish) => {
    //1. Take of a copy of current state
    const fishes = {...this.state.fishes};
    //2. update the fish
    fishes[key]=updatedFish;
    this.setState({fishes});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
                index={key}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
