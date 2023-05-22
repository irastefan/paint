import React from 'react';
import '../styles/toolbar.scss';
import toolState from '../store/toolState';
import canvasState from '../store/canvasState';
import Brush from '../tools/Brush';
import Rect from '../tools/Rect';

const ToolBar = () => {
    const changeColor = e => {
        toolState.setStrokeColor(e.target.value)
        toolState.setFillColor(e.target.value)
    }

    return (
        <div className='toolbar'>
            <button 
                className='toolbar__btn brush'
                onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
            ></button>
            <button 
                className='toolbar__btn rect'
                onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
            ></button>
            <button className='toolbar__btn circle'></button>
            <button className='toolbar__btn eraser'></button>
            <button className='toolbar__btn line'></button>
            <input 
                type='color' style={{marginLeft: 10}} 
                onChange={e => changeColor(e)} 
            />

            <button className='toolbar__btn undo'></button>
            <button className='toolbar__btn redo'></button>
            <button className='toolbar__btn save'></button>
        </div>
    );
};

export default ToolBar;