import React, { Component } from 'react';
import Grid from './Grid';
import GameControlPanel from './GameControlPanel';

class Game extends Component {
    state = {
        gamePhase: 'intialize'
    }
    handleCellSelection = (row, cell) => {
        console.log(row, cell)
    }
    updateGamePhase = (phase) => {
        this.setState({
            gamePhase: phase
        });
    }
    transitionGamePhases = () => {
        this.updateGamePhase('start');
        setTimeout(() => {
            this.updateGamePhase('playing');
            setTimeout(() => {
                this.updateGamePhase('results')
            }, 2000)
        }, 2000)
    }
    render(){
        return (
            <div className="Game">
                <pre>
                   <code>{this.state.gamePhase}</code>
                </pre>
                <Grid 
                    gamePhase={this.state.gamePhase}
                    onCellClick={this.handleCellSelection}
                    />
                <GameControlPanel 
                    onStartButtonClick={this.transitionGamePhases}
                />
            </div>
        )
    }
}

export default Game;