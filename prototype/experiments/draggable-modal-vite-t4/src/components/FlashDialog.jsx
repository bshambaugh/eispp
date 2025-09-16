// src/components/FlashDialog.js
import React, { useRef, useState } from 'react';
import './FlashDialog.css'; // CSS module for styling
const FlashDialog = () => {

    const dialogRef = useRef(null);
    const headerRef = useRef(null);
    const positionRef = useRef({x:100,y:100});
    const isDraggingRef = useRef(false);
    const offsetRef = useRef({x:0,y:0});
    const [position, setPosition] = useState({ x: 100, y: 100 });
    /*
    const [isDragging, setIsDragging] = useState(false);
    const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });
    */

    // Drag handlers
    /*
    const startDragging = (e) => {
        console.log('startDragging triggered',e.clientX, e.clientY);
        setIsDragging(true);
        setInitialMousePos({ x: e.clientX - position.x, y: e.clientY - position.y });
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', stopDragging);
    };
    */

    const startDragging = (e) => {
        console.log('startDragging triggered',e.clientX, e.clientY);
        isDraggingRef.current = true;
        offsetRef.current = {
            x: e.clientX - positionRef.current.x,
            y: e.clientY - positionRef.current.y,
        };
        document.addEventListener("mousemove",handleDrag);
        document.addEventListener("mouseup",stopDragging);
    }
    /*
    const handleDrag = (e) => {
        if (isDragging) {
            e.preventDefault();
            console.log('handleDrag triggered',e.clientX, e.clientY);
            setPosition({
                x: e.clientX - initialMousePos.x,
                y: e.clientY - initialMousePos.y,
            });
            }
    };
    */
    const handleDrag = (e) => {
       if(!isDraggingRef.current) return;
       const newX = e.clientX - offsetRef.current.x;
       const newY = e.clientY - offsetRef.current.y;
       positionRef.current = {x:newX,y:newY};
       setPosition({x:newX,y:newY}) // update UI
    }
    /*
    const stopDragging = () => {
                console.log('stopDragging triggered');
                setIsDragging(false);
                document.removeEventListener('mousemove', handleDrag);
                document.removeEventListener('mouseup', stopDragging);
    };
    */
    const stopDragging = () => {
        console.log('stopDragging triggered');
        isDraggingRef.current = false;
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', stopDragging);
    };

    const closeDialog = () => {
        if (dialogRef.current) dialogRef.current.style.display = 'none';
    };
    return (
                <div
                ref={dialogRef}
                className="dialog"
                   style={{ left: `${position.x}px`, top: `${position.y}px` }}
                    >
                    <div ref={headerRef} className="dialog-header" onMouseDown={startDragging}>
                        Flash-Style Dialog
                          <button className="dialog-close" onClick={closeDialog} onMouseDown={(e) => e.stopPropagation()}> 
                        X
                        </button>
                    </div>
                    <div className="dialog-content">
                        <p>Scrollable Text Field:</p>
                    <div
                    className="scrollable-text"
                    contentEditable
                    suppressContentEditableWarning
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                    </div>
                    <button onClick={() => alert('Action!')}>Click Me</button>
                    </div>
                    {/* <div className="resize-handle" onMouseDown={startResizing} /> */}
                    </div>
        );

};

export default FlashDialog;