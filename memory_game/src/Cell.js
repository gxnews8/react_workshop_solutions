import React from 'react';
import './Cell.css';

const Cell = (props) => {
        const { row, cell } = props;
        return (
            <div className="Cell" onClick={() => { props.onClick(row, cell)}}>
            </div>
        )
}

export default Cell;