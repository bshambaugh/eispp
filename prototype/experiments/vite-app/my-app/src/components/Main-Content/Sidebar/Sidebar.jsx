import View from './View/View.jsx'
import Applications from './Applications/Applications.jsx'
import HpComputing from './HP-Computing/HpComputing.jsx'
import ValueNetworkandPayments from './ValueNetworkandPayments/ValueNetworkandPayments.jsx'
import EditTriples from './Edit-Triples/EditTriples.jsx'
import Provenance from './Provenance/Provenance.jsx'
import Production from './Production/Production.jsx'
import Iot from './IoT/Iot.jsx'
import SettingsButton from 'components/Buttons/SettingsButton.jsx'

function Sidebar({ activeStates, onViewChange }) {
    return (
        <aside className="sidebar">
            <ul>
                <li className="sidebar-item">
                  <div className="sidebar-item-content">
                    View
                    <SettingsButton />
                  </div>
                  <View activeStates={activeStates} onViewChange={onViewChange} />
               </li>
               <li className="sidebar-item">
          <div className="sidebar-item-content">
            Applications
            <SettingsButton />
          </div>
          <Applications />
        </li>
        <li className="sidebar-item">
          <div className="sidebar-item-content">
            HP Computing
            <SettingsButton />
          </div>
          <HpComputing />
        </li>
        <li className="sidebar-item">
          <div className="sidebar-item-content">
            Value Network & Payments
            <SettingsButton />
          </div>
          <ValueNetworkandPayments />
        </li>
        <li className="sidebar-item">
          <div className="sidebar-item-content">
            Edit Triples
            <SettingsButton />
          </div>
          <EditTriples />
        </li>
        <li className="sidebar-item">
          <div className="sidebar-item-content">
            Provenance
            <SettingsButton />
          </div>
          <Provenance />
        </li>
        <li className="sidebar-item">
          <div className="sidebar-item-content">
            Production
            <SettingsButton />
          </div>
          <Production />
        </li>
        <li className="sidebar-item">
          <div className="sidebar-item-content">
            I.O.T.
            <SettingsButton />
          </div>
          <Iot />
        </li>
            </ul>
        </aside>
    )
}

export default Sidebar;