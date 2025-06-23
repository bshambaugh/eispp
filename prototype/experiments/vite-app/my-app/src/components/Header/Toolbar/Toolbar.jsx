import History from './History/History.jsx';

function Toolbar() {
    return (
        <div className="toolbar">
		    <button>Protege</button>
		    <button>LDBrowser</button>
		    <button>OB</button>
		    <button>SPARQL</button>
		    <input type="text" id="nlq" name="nlq" placeholder="Natural Language Query"/>
              <button>Query</button>
	        <History />
            <button>Preferences</button>
            <input type="text" id="uri" name="nlq" placeholder="Data Path or URI"/>
              <button>Load DATA</button>
              <button>Save DATA</button>
        </div> 
    );
}

export default Toolbar;