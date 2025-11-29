import { useState, useRef, useEffect } from "react";
import TabTagButton from "../ui/TabTagButton";
import styles from "./LensEditor.module.css";

const initialLenses = [
  {
    id: 1,
    label: "Hide Type",
    content: `:exampleShortLens rdf:type fresnel:Lens ;\n  fresnel:classLensDomain owl:Thing ;\n  fresnel:hideProperties ( rdf:type ).`,
  },
  { id: 2, label: "Tab Title", content: "Content for Tab Title goes here." },
];

export default function LensEditor({ onChange }) {
  const [tabs, setTabs] = useState(initialLenses);
  const [activeTab, setActiveTab] = useState(1);
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    onChange(tabs.map(t => ({ label: t.label, content: t.content })));
  }, [tabs, onChange]);

  useEffect(() => {
    const updateArrows = () => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;
      setShowLeft(el.scrollLeft > 0);
      setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
    };
    updateArrows();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateArrows);
      return () => el.removeEventListener("scroll", updateArrows);
    }
  }, [tabs]);

  const scrollBy = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const tab = el.querySelector(".tab-item"); // Note: class from TabTagButton.module.css
    const step = tab ? tab.offsetWidth + 8 : 150;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const addTab = () => {
    const newId = tabs.length + 1;
    const newTab = { id: newId, label: `Tab ${newId}`, content: "" };
    setTabs((prev) => [...prev, newTab]);
    setActiveTab(newId);
  };

  const removeTab = (id) => {
    const newTabs = tabs.filter((t) => t.id !== id);
    setTabs(newTabs);
    if (activeTab === id && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  };

  const updateTabContent = (id, newContent) => {
    setTabs((prev) =>
      prev.map((t) => (t.id === id ? { ...t, content: newContent } : t))
    );
  };

  return (
    <div className={styles.tabbedBox}>
      <div className={styles.tabsWrapper}>
        {showLeft && (
          <button className={`${styles.scrollArrow} ${styles.scrollArrowLeft}`} onClick={() => scrollBy(-1)}>
            &lt;
          </button>
        )}

        <div className={styles.tabsScroll} ref={scrollRef}>
          {tabs.map((tab) => (
            <TabTagButton
              key={tab.id}
              text={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              onRemove={() => removeTab(tab.id)}
            />
          ))}
          <button className={styles.addTab} onClick={addTab}>
            +
          </button>
        </div>

        {showRight && (
          <button className={`${styles.scrollArrow} ${styles.scrollArrowRight}`} onClick={() => scrollBy(1)}>
            &gt;
          </button>
        )}
      </div>

      <div className={styles.tabContent}>
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div
              key={tab.id}
              ref={contentRef}
              className={styles.tabContentEditable}
              contentEditable
              suppressContentEditableWarning
              onInput={(e) => updateTabContent(tab.id, e.currentTarget.textContent || "")}
              onBlur={(e) => updateTabContent(tab.id, e.currentTarget.textContent || "")}
            >
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}