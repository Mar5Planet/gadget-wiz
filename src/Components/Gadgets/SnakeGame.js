import React from 'react'
import ReactDOM from 'react-dom';
import Snake    from 'react-snake-game';

const WRAPPER_STYLE = {

};

function SnakeGame() {
    return (
        <div style={WRAPPER_STYLE}>
            <Snake sound={true} />
        </div>
    )
}

export default SnakeGame;