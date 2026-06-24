// src/App.jsx
import { useState } from 'react';
import TabTagButton from './components/TabTagButton';
import './App.css';

function App() {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      label: 'Hide Type',
      content: `:exampleShortLens rdf:type fresnel:Lens ;\n  fresnel:classLensDomain owl:Thing ;\n  fresnel:hideProperties ( rdf:type ).`,
    },
    { id: 2, label: 'Tab Title', content: 'Content for Tab Title goes here.' },
  ]);
  const [activeTab, setActiveTab] = useState(1);

  const addTab = () => {
    const newId = tabs.length + 1;
    setTabs([
      ...tabs,
      { id: newId, label: `Tab ${newId}`, content: `Content for Tab ${newId} goes here.` },
    ]);
    setActiveTab(newId);
  };

  const removeTab = (id) => {
    const newTabs = tabs.filter((t) => t.id !== id);
    setTabs(newTabs);
    if (activeTab === id && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    } else if (newTabs.length === 0) {
      setActiveTab(null);
    }
  };

  return (
    <div className="tabbed-box">
      {/* ───── TABS ───── */}
      <div className="tabs">
        {tabs.map((tab) => (
          <TabTagButton
            key={tab.id}
            text={tab.label}
            isActive={activeTab === tab.id}  // <-- better: use a boolean prop
            onClick={() => setActiveTab(tab.id)}
            onRemove={() => removeTab(tab.id)}
          />
        ))}

        {/* + button stays the same */}
        <button className="add-tab" onClick={addTab}>
          +
        </button>
      </div>

      {/* ───── CONTENT ───── */}
      <div className="tab-content">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="content">
                <pre>{tab.content}</pre>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default App;
