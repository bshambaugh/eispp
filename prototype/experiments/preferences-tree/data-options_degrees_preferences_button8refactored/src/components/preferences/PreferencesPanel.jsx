import { useState } from "react";
import DataOptionsSection from "./DataOptionsSelection";
import LensEditor from "./LensEditor";
import GlobalToggle from "./GlobalToggle";
import SubmitButton from "./SubmitButton";
import styles from "./PreferencesPanel.module.css";

export default function PreferencesPanel() {
  const [isOpen, setIsOpen] = useState(true);
  const [dataOptions, setDataOptions] = useState({});
  const [lenses, setLenses] = useState([]);
  const [isGlobal, setIsGlobal] = useState(false);

  const handleSubmit = () => {
    const finalData = {
      preferences: dataOptions,
      lenses: lenses,
      global: isGlobal,
    };
    console.log("Submitted:", finalData);
    alert("Check console!\n" + JSON.stringify(finalData, null, 2));
  };

  return (
    <div className={styles.panel}>
     
      <div className={styles.header}>
        By default when I run a Natural Language Query Show:
        <button onClick={() => setIsOpen(!isOpen)} className={styles.toggleBtn}>
          {isOpen ? "▼" : "▶"}
        </button>
      </div>

      {isOpen && (
        <div className={styles.content}>
          <DataOptionsSection onChange={setDataOptions} />
          <LensEditor onChange={setLenses} />
        </div>
      )}

      <GlobalToggle checked={isGlobal} onChange={setIsGlobal} />
      <p className={styles.status}>Global: {isGlobal ? "Yes" : "No"}</p>

      {isOpen && <SubmitButton onClick={handleSubmit} />}
    </div>
  );
}