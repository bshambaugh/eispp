import Sidebar from './Sidebar/Sidebar.jsx'
import Content from './Content/Content.jsx';

function MainContent() {
  return (
     <div className="main-content">
        <Sidebar />
        <Content />
     </div>
  );
}

export default MainContent;