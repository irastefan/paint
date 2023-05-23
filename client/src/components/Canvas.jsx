import React, { useEffect, useRef } from 'react';
import '../styles/canvas.scss';
import { observer } from 'mobx-react-lite';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import Brush from '../tools/Brush';

const Canvas = observer(() => {
    const canvasRef = useRef();

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current);
        toolState.setTool(new Brush(canvasRef.current));
    }, []);

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    return (
        <div className='canvas'>
            <canvas 
                onMouseDown={() => mouseDownHandler()}
                ref={canvasRef} 
                width={1200} 
                height={800}
                style={{background: '#fff'}}
            ></canvas>
        </div>
    );
});

export default Canvas;