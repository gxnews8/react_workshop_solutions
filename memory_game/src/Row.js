import React from 'react';
import Cell from './Cell';

const Row = (props) => {
        const cells = [];
        for (let i = 0; i < 4; i += 1){
            cells.push(<Cell onClick={props.onCellClick} key={i} row={props.row} cell={i}/>)
        }
        return (
            <div className="Row">
                {cells}
            </div>
        )
}

export default Row;