import React from 'react';
import Row from './Row';
import './Grid.css';

const Grid = (props) => {
        const rows = [];
        for (let i = 0; i < 3; i += 1){
            rows.push(<Row onCellClick={props.onCellClick} key={i} row={i}/>)
        }
        return (
            <div className={`Grid ${props.gamePhase}`}>
                {rows}
            </div>
        )
}

export default Grid;