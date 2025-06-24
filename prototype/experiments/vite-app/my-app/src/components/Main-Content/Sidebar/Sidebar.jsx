import View from './View/View.jsx'
import Applications from './Applications/Applications.jsx'
import HpComputing from './HP-Computing/HpComputing.jsx'
import ValueNetworkandPayments from './ValueNetworkandPayments/ValueNetworkandPayments.jsx'
import EditTriples from './Edit-Triples/EditTriples.jsx'
import Provenance from './Provenance/Provenance.jsx'
import Production from './Production/Production.jsx'
import Iot from './IoT/Iot.jsx'

function Sidebar({ viewState, onViewChange }) {
    return (
        <aside className="sidebar">
            <ul>
                <li>View
                    <View viewState={viewState} onViewChange={onViewChange} />
                </li>
                <li>Applications
                    <Applications />
                </li>
                <li>HP Computing
                    <HpComputing />
                </li>
                <li>Value Network & Payments
                    <ValueNetworkandPayments />
                </li>
                <li>Edit Triples
                    <EditTriples />
                </li>
                <li>Provenance
                    <Provenance />
                </li>
                <li>Production
                    <Production />
                </li>
                <li>I.O.T.
                    <Iot />
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;