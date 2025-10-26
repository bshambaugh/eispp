import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('hideType');

  return (
    <div className="tabbed-box">
      <div className="tabs">
        <button
          className={activeTab === 'hideType' ? 'active' : ''}
          onClick={() => setActiveTab('hideType')}
        >
          Hide Type
        </button>
        <button
          className={activeTab === 'tabTitle' ? 'active' : ''}
          onClick={() => setActiveTab('tabTitle')}
        >
          Tab Title
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'hideType' && (
          <div className="content">
            <pre>
              {`:exampleShortLens rdf:type fresnel:Lens ;
  fresnel:classLensDomain owl:Thing ;
  fresnel:hideProperties ( rdf:type ).`}
            </pre>
          </div>
        )}
        {activeTab === 'tabTitle' && (
          <div className="content">
            <p>Content for Tab Title goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;