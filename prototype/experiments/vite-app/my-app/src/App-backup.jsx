import React, { useState } from 'react'
import './App.css'

import {Content,ErrorBoundary,Sidebar,Toolbar,ViewButton} from './components'

function App() {
 // const [viewState, setViewState] = useState('state1'); // track state1 or state2
  
 /*
  const handleDocumentsClick = () => {
    setViewState('state2');
  };*/

  return (
    <div class="container">
        <header>
            <div class="toolbar">
		    <button>Protege</button>
		    <button>LDBrowser</button>
		    <button>OB</button>
		    <button>SPARQL</button>
		<input type="text" placeholder="Natural Language Query"/>
                <button>Query</button>
		 <div class="history-controls-group">
                    <button>History</button>
                    <div class="controls">
                        <button>|&lt;</button>
                        <button>&lt;</button>
                        <button>||</button>
                        <button>&gt;</button>
                        <button>&gt;|</button>
                    </div>
                </div>
                <button>Preferences</button>
                <input type="text" placeholder="Data Path or URI"/>
                <button>Load DATA</button>
                <button>Save DATA</button>
            </div>
        </header>
        <div class="main-content">
            <aside class="sidebar">
                <ul>
		    <li>View
	            <div class="view-group">
		       <ul> 
			       <li><button>OPM</button></li>
			       <li><button>Directed Graph</button></li>
			       <li><button>Documents</button></li>
			       <li><button>Fresnel</button></li>
			       <li><button>GSS</button></li>
		       </ul> 
                    </div>
		    </li>
		    <li>Applications
                        <div class="applications-group">
                            <ul>
				    <li><button>Code Aster</button></li>
				    <li><button>WxMaxima</button></li>
				    <li><button>OpenFoam</button></li>
				    <li><button>Etherpad</button></li>
				    <li><button>OpenModelica</button></li>
				    <li><button>FreeCAD</button></li>
                            </ul>
                        </div>
                    </li>
		    <li>HP Computing
        <div class="hp-computing-group">
            <ul>
		    <li><button>Find Nodes</button></li>
            </ul>
        </div>
    </li>
    <li>Value Network & Payments
        <div class="value-network-and-payments-group">
            <ul>
		    <li><button>REA</button></li>
		    <li><button>Ripple</button></li>
		    <li><button>CryptoCoin</button></li>
            </ul>
        </div>
    </li>
    <li>Edit Triples
        <div class="edit-triples-group">
            <ul>
		    <li><button>node</button><button>+</button></li>
		    <li><button>edge</button><button>-</button></li>
		    <li><button>OPM</button><button>NLP/*</button></li>
		    <li><button>ontology</button></li>
            </ul>
        </div>
    </li>
    <li>Provenance
        <div class="provenance-group">
            <ul>
		    <li><button>R&W Base</button></li>
            </ul>
        </div>
    </li>
    <li>Production
        <div class="production-group">
            <ul>
		    <li><button>VRM</button></li>
		    <li><button>BotQueue</button></li>
            </ul>
        </div>
    </li>
    <li>I.O.T.
        <div class="iot-group">
            <ul>
		    <li><button>Show</button></li>
            </ul>
        </div>
    </li>
                </ul>
            </aside>
            <main class="content">
                <div class="placeholder">
	            <div class="placeholder-left"></div>
                    <div class="placeholder-right"></div>
                </div>
            </main>
        </div>
    </div>
 )
}

export default App
