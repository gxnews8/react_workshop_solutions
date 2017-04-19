import React, { Component } from 'react';
import Game from './Game';

class App extends Component {
    render(){
        return (
            <div>
                <h1>Memory Game</h1>
                <Game />
            </div>
        )
    }
}

export default App;