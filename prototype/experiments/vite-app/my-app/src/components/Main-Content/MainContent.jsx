import Sidebar from './Sidebar/Sidebar.jsx'
import Content from './Content/Content.jsx';

function MainContent({ activeStates, onViewChange }) {
   return (
      <div className="main-content">
          <Sidebar activeStates={activeStates} onViewChange={onViewChange} />
          <Content activeStates={activeStates} />
      </div>
   );
}

export default MainContent;