import React from 'react';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
// methods that update state must live in the same component
class App extends React.Component {
    state = {
        fishes:{},
        order: {}
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
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>

        )
    }
} 

export default App; 