//import StateButton from "../../../StateButton";
import { StateButton } from 'components';

function View({ onViewChange }) {
    return (
        <div className="view-group">
            <ul> 
                <li><StateButton label="OPM" stateName="state-opm" onStateChange={onViewChange} /></li>
                {/* <li><button>OPM</button></li> */} 
                <li><StateButton label="Directed Graph" stateName="state-directed-graph" onStateChange={onViewChange} /></li>
                {/* <li><button>Directed Graph</button></li> */} 
                <li><StateButton label="Documents" stateName="state-documents" onStateChange={onViewChange} /></li>
                {/* <li><button>Documents</button></li> */} 
                <li><StateButton label="Fresnel" stateName="state-fresnel" onStateChange={onViewChange} /></li>
                {/* <li><button>Fresnel</button></li> */} 
                <li><StateButton label="GSS" stateName="state-gss" onStateChange={onViewChange} /></li>
                {/* <li><button>GSS</button></li> */} 
            </ul> 
        </div>
    );
}

export default View;