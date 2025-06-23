import React from 'react';
function Content({ viewState }) {
  return (
    <main className="content">
     <div className="placeholder">
       <div className={`placeholder-left ${viewState === 'state2' ? 'state2' :''}`}>
        {viewState === 'state1' ? (
          <div className="placeholder-left"></div>
        ) : viewState === 'state2' ? (
          <>
            <div className="placeholder-left-top"></div>
            <div className="placeholder-left-bottom"></div>
          </>
        ) : (
          <div className="placeholder-left">Other View Content</div> // Placeholder for other states
        )}
      </div>
      <div className="placeholder-right"></div>
    </div>
  </main>
 );
}

export default Content;