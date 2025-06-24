import Sidebar from './Sidebar/Sidebar.jsx'
import Content from './Content/Content.jsx';

function MainContent({ viewState, onViewChange }) {

  return (
     <div className="main-content">
        <Sidebar viewState={viewState} onViewChange={onViewChange}/>
        <Content viewState={viewState}/>
     </div>
  );
}

export default MainContent;