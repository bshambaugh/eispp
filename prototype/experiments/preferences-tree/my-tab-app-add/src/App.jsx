import { useState } from 'react';
import './App.css';

function App() {
  const [tabs, setTabs] = useState([
    { id: 1, label: 'Hide Type', content: `:exampleShortLens rdf:type fresnel:Lens ;\n  fresnel:classLensDomain owl:Thing ;\n  fresnel:hideProperties ( rdf:type ).` },
    { id: 2, label: 'Tab Title', content: 'Content for Tab Title goes here.' },
  ]);
  const [activeTab, setActiveTab] = useState(1);

  const addTab = () => {
    const newId = tabs.length + 1;
    setTabs([...tabs, { id: newId, label: `Tab ${newId}`, content: `Content for Tab ${newId} goes here.` }]);
    setActiveTab(newId);
  };

  const removeTab = (id) => {
    const newTabs = tabs.filter(tab => tab.id !== id);
    setTabs(newTabs);
    if (activeTab === id && newTabs.length > 0) {
      setActiveTab(newTabs[0].id); // Switch to the first tab if the active one is removed
    } else if (newTabs.length === 0) {
      setActiveTab(null); // Handle case when all tabs are removed
    }
  };

  return (
    <div className="tabbed-box">
      <div className="tabs">
        {tabs.map((tab) => (
          <div key={tab.id} className="tab-item">
            <button
              className={activeTab === tab.id ? 'active' : ''}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
            <button className="remove-tab" onClick={() => removeTab(tab.id)}>×</button>
          </div>
        ))}
        <button className="add-tab" onClick={addTab}>+</button>
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <div key={tab.id} className="content">
              <pre>{tab.content}</pre>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default App;