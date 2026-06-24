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
    el?.addEventListener("scroll", updateArrows);
    return () => el?.removeEventListener("scroll", updateArrows);
  }, [tabs]);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const step = 160;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const addTab = () => {
    const newId = Date.now();
    setTabs((t) => [...t, { id: newId, label: "New Tab", content: "" }]);
    setActiveTab(newId);
  };

  const removeTab = (id) => {
    setTabs((t) => t.filter((tab) => tab.id !== id));
    if (activeTab === id && tabs.length > 1) {
      setActiveTab(tabs[0].id);
    }
  };

  const updateTabContent = (id, content) => {
    setTabs((t) => t.map((tab) => (tab.id === id ? { ...tab, content } : tab)));
  };

  const updateTabLabel = (id, label) => {
    setTabs((t) => t.map((tab) => (tab.id === id ? { ...tab, label } : tab)));
  };

  return (
    <div className={styles.editor}>
      <div className={styles.tabBar}>
        {showLeft && <button className={styles.arrowLeft} onClick={() => scrollBy(-1)}>{"<"}</button>}
        <div className={styles.tabScroll} ref={scrollRef}>
          {tabs.map((tab) => (
            <TabTagButton
              key={tab.id}
              text={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              onRemove={() => removeTab(tab.id)}
              onLabelChange={(newLabel) => updateTabLabel(tab.id, newLabel)}
            />
          ))}
          <button className={styles.addBtn} onClick={addTab}>+</button>
        </div>
        {showRight && <button className={styles.arrowRight} onClick={() => scrollBy(1)}>{">"}</button>}
      </div>

      <div className={styles.content}>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                contentEditable
                suppressContentEditableWarning
                className={styles.editable}
                onInput={(e) => updateTabContent(tab.id, e.currentTarget.textContent || "")}
                dangerouslySetInnerHTML={{ __html: tab.content.replace(/\n/g, "<br>") }}
              />
            )
        )}
      </div>
    </div>
  );
}