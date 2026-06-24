//import StateButton from "../../../StateButton";
import { StateButton } from 'components';

function View({ activeStates, onViewChange }) {
    return (
        <div className="view-group">
            <ul> 
                <li><StateButton label="Documents" stateName="state-documents" onStateChange={onViewChange} isActive={activeStates.includes('state-documents')}/></li>
                <li><StateButton label="Data" stateName="state-data" onStateChange={onViewChange} isActive={activeStates.includes('state-data')}/></li>
            </ul> 
        </div>
    );
}

export default View;

// Data should expand to 'OPM','directed graph','faceted browsing','fresnel', and 'gss' through Preferences