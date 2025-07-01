//import StateButton from "../../../StateButton";
import { StateButton } from 'components';

function View({ activeStates, onViewChange }) {
    return (
        <div className="view-group">
            <ul> 
                <li><StateButton label="OPM" stateName="state-opm" onStateChange={onViewChange} isActive={activeStates.includes('state-opm')}/></li>
                {/* <li><button>OPM</button></li> */} 
                <li><StateButton label="Directed Graph" stateName="state-directed-graph" onStateChange={onViewChange} isActive={activeStates.includes('state-directed-graph')}/></li>
                {/* <li><button>Directed Graph</button></li> */} 
                <li><StateButton label="Documents" stateName="state-documents" onStateChange={onViewChange} isActive={activeStates.includes('state-documents')}/></li>
                {/* <li><button>Documents</button></li> */} 
                <li><StateButton label="Fresnel" stateName="state-fresnel" onStateChange={onViewChange} isActive={activeStates.includes('state-fresnel')}/></li>
                {/* <li><button>Fresnel</button></li> */} 
                <li><StateButton label="GSS" stateName="state-gss" onStateChange={onViewChange} isActive={activeStates.includes('state-gss')}/></li>
                {/* <li><button>GSS</button></li> */} 
            </ul> 
        </div>
    );
}

export default View;