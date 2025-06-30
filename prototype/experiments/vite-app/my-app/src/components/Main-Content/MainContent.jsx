import Sidebar from './Sidebar/Sidebar.jsx'
import Content from './Content/Content.jsx';
import { ViewStateContext } from '../../context/ViewStateContext.jsx';
import { useContext } from 'react';

function MainContent() {
  const { viewState, handleViewChange } = useContext(ViewStateContext);

  return (
   <div className="main-content">
     <Sidebar />
     <Content />
   </div>
 );
}

export default MainContent;