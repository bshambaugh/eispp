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
       if(!isDraggingRef.current) return;
       const newX = (e.clientX - offsetRef.current.x) < 0 ? 0 : e.clientX - offsetRef.current.x;
       const newY = (e.clientY - offsetRef.current.y) < 0 ? 0 : e.clientY - offsetRef.current.y;
       positionRef.current = {x:newX,y:newY};
       setPosition({x:newX,y:newY}) // update UI
    }
*/
/*
    const handleDrag = (e) => {
        if(!isDraggingRef.current) return;
        const newX = Math.max(0,e.clientX - offsetRef.current.x);
        const newY = Math.max(0,e.clientY - offsetRef.current.y);
        positionRef.current = {x:newX,y:newY};
        setPosition({x:newX,y:newY})
    }
*/
    const handleDrag = (e) => {
        if(!isDraggingRef.current) return;
        const dialog = dialogRef.current;
        if(!dialog) return;
        const maxX = window.innerWidth - dialog.offsetWidth;
        const maxY = window.innerHeight - dialog.offsetHeight;
        const newX = Math.max(0,Math.min(maxX,e.clientX - offsetRef.current.x));
        const newY = Math.max(0,Math.min(maxY,e.clientY - offsetRef.current.y));
        positionRef.current = {x:newX,y:newY};
        setPosition({x:newX,y:newY})
    }
/*
    const handleDrag = (e) => {
        if(!isDraggingRef.current) return;
        const newX = e.clientX - offsetRef.current.x;
        const newY = e.clientY - offsetRef.current.y;
        positionRef.current = {x:newX,y:newY};
        setPosition({x:newX,y:newY}) // update UI
     }
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
                    </div>
        );

};

export default FlashDialog;