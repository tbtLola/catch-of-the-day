import React from 'react';
import { deflateRawSync } from 'zlib';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
// flott flott still applies in this case
class App extends React.Component {
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood market"/>
                </div>
                <Inventory />
                <Order />
            </div>

        )
    }
} 

export default App; 