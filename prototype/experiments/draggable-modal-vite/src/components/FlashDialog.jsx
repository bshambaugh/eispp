// src/components/FlashDialog.js
import React, { useRef, useState } from 'react';
import './FlashDialog.css'; // CSS module for styling
const FlashDialog = () => {

    const dialogRef = useRef(null);
    const headerRef = useRef(null);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState({ width: 300, height: 150 });
    const [isResizing, setIsResizing] = useState(false);
    const [initialSize, setInitialSize] = useState({ width: 0, height: 0 });
    const [resizeStartPos, setResizeStartPos] = useState({ x: 0, y: 0 });
    // Drag handlers
    const startDragging = (e) => {
        setIsDragging(true);
        setInitialMousePos({ x: e.clientX - position.x, y: e.clientY - position.y });
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', stopDragging);
    };
    const handleDrag = (e) => {
        if (isDragging) {
            e.preventDefault();
            setPosition({
                x: e.clientX - initialMousePos.x,
                y: e.clientY - initialMousePos.y,
            });
            }
    };

    const stopDragging = () => {
                setIsDragging(false);
                document.removeEventListener('mousemove', handleDrag);
                document.removeEventListener('mouseup', stopDragging);
    };

    // Resize handlers
    const startResizing = (e) => {
                setIsResizing(true);
                setResizeStartPos({ x: e.clientX, y: e.clientY });
                setInitialSize({ width: size.width, height: size.height });
                document.addEventListener('mousemove', handleResize);
                document.addEventListener('mouseup', stopResizing);
    };
            
    const handleResize = (e) => {
        if (isResizing) {
                e.preventDefault();
                const newWidth = Math.max(200, initialSize.width + (e.clientX -
                resizeStartPos.x));
                const newHeight = Math.max(150, initialSize.height + (e.clientY -
                resizeStartPos.y));
                setSize({ width: newWidth, height: newHeight });
        }
    };

    const stopResizing = () => {
                setIsResizing(false);
                document.removeEventListener('mousemove', handleResize);
                document.removeEventListener('mouseup', stopResizing);
    };

    const closeDialog = () => {
        if (dialogRef.current) dialogRef.current.style.display = 'none';
    };
    return (
                <div
                ref={dialogRef}
                className="dialog"
                    style={{ left: `${position.x}px`, top: `${position.y}px`, width: `$
                    {size.width}px`, height: `${size.height}px` }}
                    >
                    <div ref={headerRef} className="dialog-header" onMouseDown={startDragging}>
                        Flash-Style Dialog
                        <button className="dialog-close" onClick={closeDialog}>
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
                    <div className="resize-handle" onMouseDown={startResizing} />
                    </div>
        );

};

export default FlashDialog;