import React from 'react';

const GameControlPanel = (props) => {
    return (
        <div className="GameControlPanel">
            <button onClick={props.onStartButtonClick}>Play Game!</button>
        </div>
    )
}

export default GameControlPanel;