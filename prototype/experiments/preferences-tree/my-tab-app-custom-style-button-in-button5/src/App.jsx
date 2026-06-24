// src/App.jsx
import { useState, useRef, useEffect } from 'react';
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

  // refs for the scroll container
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // -----------------------------------------------------------------
  //  Scroll handling – update arrow visibility on any change
  // -----------------------------------------------------------------
  const updateArrows = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', updateArrows);
    return () => el?.removeEventListener('scroll', updateArrows);
  }, [tabs]);

  // scroll by one tab width (you can tweak the amount)
  const scrollBy = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const tab = el.querySelector('.tab-item'); // each tab has this class
    const step = tab ? tab.offsetWidth + 8 : 150; // 8px = gap
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  // -----------------------------------------------------------------
  //  Tab CRUD
  // -----------------------------------------------------------------
  const addTab = () => {
    const newId = tabs.length + 1;
    setTabs((t) => [
      ...t,
      { id: newId, label: `Tab ${newId}`, content: `Content for Tab ${newId}` },
    ]);
    setActiveTab(newId);
  };

  const removeTab = (id) => {
    const newTabs = tabs.filter((t) => t.id !== id);
    setTabs(newTabs);
    if (activeTab === id && newTabs.length) {
      setActiveTab(newTabs[0].id);
    }
  };

  // -----------------------------------------------------------------
  //  Render
  // -----------------------------------------------------------------
  return (
    <div className="tabbed-box">
      {/* ------------------- TAB BAR ------------------- */}
      <div className="tabs-wrapper">
        {/* left arrow */}
        {showLeft && (
          <button className="scroll-arrow left" onClick={() => scrollBy(-1)}>
            &lt;
          </button>
        )}

        {/* scrollable container */}
        <div className="tabs-scroll" ref={scrollRef} onScroll={updateArrows}>
          {tabs.map((tab) => (
            <TabTagButton
              key={tab.id}
              text={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              onRemove={() => removeTab(tab.id)}
              className="tab-item"   
            />  
          ))}

          {/* + button – stays inside the scroll area */}
          <button className="add-tab" onClick={addTab}>
            +
          </button>
        </div>

        {/* right arrow */}
        {showRight && (
          <button className="scroll-arrow right" onClick={() => scrollBy(1)}>
            &gt;
          </button>
        )}
      </div>

      {/* ------------------- CONTENT ------------------- */}
   {/*   <div className="tab-content">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>
                <pre>{tab.content}</pre>
              </div>
            )
        )}
      </div> */}
     <div className="tab-content">
  {tabs.map(
    (tab) =>
      activeTab === tab.id && (
        <div
          key={tab.id}
          className="tab-content-editable"
          contentEditable
          suppressContentEditableWarning
          // Update state on every change (live sync)
          onInput={(e) => {
            const newContent = e.currentTarget.textContent || '';
            setTabs((prev) =>
              prev.map((t) =>
                t.id === tab.id ? { ...t, content: newContent } : t
              )
            );
          }}
          // Optional: also save on blur (backup)
          onBlur={(e) => {
            const newContent = e.currentTarget.textContent || '';
            setTabs((prev) =>
              prev.map((t) =>
                t.id === tab.id ? { ...t, content: newContent } : t
              )
            );
          }}
          // Initialize content safely
          ref={(el) => {
            if (el && el.textContent !== tab.content) {
              el.textContent = tab.content;
            }
          }}
        />
      )
  )}
</div>
    </div>
  );
}

export default App;