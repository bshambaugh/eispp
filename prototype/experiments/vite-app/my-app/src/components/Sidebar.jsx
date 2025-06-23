import React from 'react';
import ViewButton from './ViewButton';

function Sidebar({ onViewChange }) {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          View
          <div className="view-group">
            <ul>
              <li><ViewButton label="OPM" stateName="state-opm" 
                   onStateChange={onViewChange} /></li>
              <li><ViewButton label="Directed Graph" stateName="state-directed-graph" 
                   onStateChange={onViewChange} /></li>
              <li><ViewButton label="Documents" stateName="state2"
                   onStateChange={onViewChange} /></li>
              <li><ViewButton label="Fresnel" stateName="state-fresnel"
                   onStateChange={onViewChange} /></li>
              <li><ViewButton label="GSS" stateName="state-gss"
                   onStateChange={onViewChange} /></li>
            </ul>
          </div>
        </li>
        <li>
          Applications
          <div className="applications-group">
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
        <li>
          HP Computing
          <div className="hp-computing-group">
            <ul>
              <li><button>Find Nodes</button></li>
            </ul>
          </div>
        </li>
        <li>
          Value Network & Payments
          <div className="value-network-and-payments-group">
            <ul>
              <li><button>REA</button></li>
              <li><button>Ripple</button></li>
              <li><button>CryptoCoin</button></li>
            </ul>
          </div>
        </li>
        <li>
          Edit Triples
          <div className="edit-triples-group">
            <ul>
              <li>
                <button>node</button>
                <button>+</button>
              </li>
              <li>
                <button>edge</button>
                <button>-</button>
              </li>
              <li>
                <button>OPM</button>
                <button>NLP/*</button>
              </li>
             <li><button>ontology</button></li>
            </ul>
          </div>
        </li>
        <li>
          Provenance
          <div className="provenance-group">
            <ul>
              <li><button>R&W Base</button></li>
            </ul>
          </div>
        </li>
        <li>
          Production
          <div className="production-group">
            <ul>
              <li><button>VRM</button></li>
              <li><button>BotQueue</button></li>
            </ul>
          </div>
        </li>
        <li>
          I.O.T.
          <div className="iot-group">
            <ul>
              <li><button>Show</button></li>
            </ul>
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;