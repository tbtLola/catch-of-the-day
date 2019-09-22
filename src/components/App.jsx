import React from 'react';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from '../sample-fishes'
import Fish from "./Fish"

// methods that update state must live in the same component as where the state lives
class App extends React.Component {
    state = {
        fishes:{},
        order: {}
    };

    loadSampleFishes = () => {
        this.setState({fishes:sampleFishes});   
    };

    addToOrder = (key) => {
        // 1. Take a copy of state
        const order ={...this.state.order};
        // 2. Either add to order or update the number in the order
        order[key] = order[key] + 1 || 1; 
        // 3. Call set state to update our state object
        this.setState({order});
    };

    addFish = (fish) => {
        // Updating state
        // 1. Take a copy of existing state (you dont want to modify the actual state)
        const fishes = {...this.state.fishes} // takes a copy of everything
        // 2. Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish; // randomly generating a unique key
        // 3. Set the new fishes object to state
        // only need to update the pieces that we only need
        this.setState({
            fishes
        });
    };

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood market"/>
                <ul className="fishes">
                    {Object.keys(this.state.fishes).map(key => (
                        <Fish
                         key={key}
                         details={this.state.fishes[key]} 
                         addToOrder={this.addToOrder} 
                         index={key}/> 
                    ))}
                </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>

        )
    }
} 

export default App; 