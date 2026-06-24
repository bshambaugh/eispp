// src/components/FlashDialog.jsx
import React, { useRef, useState, useEffect } from 'react';
import './FlashDialog.css';
const FlashDialog = () => {
const dialogRef = useRef(null);
const headerRef = useRef(null);
const [position, setPosition] = useState({ x: 100, y: 100 });
const [isDragging, setIsDragging] = useState(false);
const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });
const startDragging = (e) => {
console.log('startDragging', e.clientX, e.clientY);
setIsDragging(true);
setInitialMousePos({ x: e.clientX - position.x, y: e.clientY - position.y });
document.addEventListener('mousemove', handleDrag);
document.addEventListener('mouseup', stopDragging);
};
const handleDrag = (e) => {
if (isDragging) {
e.preventDefault();
console.log('handleDrag', e.clientX, e.clientY);
const newX = Math.max(0, Math.min(e.clientX - initialMousePos.x,
window.innerWidth - 300));
const newY = Math.max(0, Math.min(e.clientY - initialMousePos.y,
window.innerHeight - 250));
setPosition({
x: newX,
y: newY,
});
}
};
const stopDragging = () => {
console.log('stopDragging');
setIsDragging(false);
document.removeEventListener('mousemove', handleDrag);
document.removeEventListener('mouseup', stopDragging);
};
useEffect(() => {
return () => {
document.removeEventListener('mousemove', handleDrag);
document.removeEventListener('mouseup', stopDragging);
};
}, []);
const closeDialog = () => {
if (dialogRef.current) dialogRef.current.style.display = 'none';
};return (
<div
ref={dialogRef}
className="dialog"
style={{ left: `${position.x}px`, top: `${position.y}px` }}
>
<div ref={headerRef} className="dialog-header" onMouseDown={startDragging}>
Flash-Style Dialog
<button
className="dialog-close"
onClick={closeDialog}
onMouseDown={(e) => e.stopPropagation()}
>
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
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis
aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat
nulla pariatur.
</div>
<button onClick={() => alert('Action!')}>Click Me</button>
</div>
</div>
);
};
export default FlashDialog;