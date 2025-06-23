import React from 'react';

function Toolbar() {
return (
<header>
    <div className="toolbar">
        <button>Protege</button>
        <button>LDBrowser</button>
        <button>OB</button>
        <button>SPARQL</button>
        <input type="text" placeholder="Natural Language Query" />
        <button>Query</button>
     <div className="history-controls-group">
                  <button>History</button>
                  <div className="controls">
                        <button>|&lt;</button>
                        <button>&lt;</button>
                        <button>||</button>
                        <button>&gt;</button>
                        <button>&gt;|</button>
                  </div>
     </div>
        <button>Preferences</button>
        <input type="text" placeholder="Data Path or URI" />
        <button>Load DATA</button>
        <button>Save DATA</button>
    </div>
</header>

);
}

export default Toolbar;