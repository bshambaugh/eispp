import { useState } from "react";
import DataOptionsSelection from "./DataOptionsSelection";
import LensEditor from "./LensEditor";
import GlobalToggle from "./GlobalToggle";
import SubmitButton from "./SubmitButton";
import styles from "./PreferencesPanel.module.css";

export default function PreferencesPanel() {
  const [isOpen, setIsOpen] = useState(true); // Start open to match screenshots
  const [dataOptions, setDataOptions] = useState({});
  const [lenses, setLenses] = useState([]);
  const [isGlobal, setIsGlobal] = useState(false);

  const handleSubmit = () => {
    const finalData = {
      preferences: dataOptions,
      lenses,
      global: isGlobal,
    };
    console.log("Submitted:", finalData);on
    alert("Check console!\n" + JSON.stringify(finalData, null, 2));
  };

  return (
    <div className={styles.panel}>
      <h3>Preferences</h3>

      <div className={styles.header}>
        By default when I run a Natural Language Query Show:
        <button onClick={() => setIsOpen(!isOpen)} className={styles.toggleBtn}>
          {isOpen ? "▼" : "▶"}
        </button>
      </div>

      {isOpen && (
        <div className={styles.content}>
          <DataOptionsSelection onChange={setDataOptions} />
          <LensEditor onChange={setLenses} />
        </div>
      )}

      <GlobalToggle checked={isGlobal} onChange={setIsGlobal} />
      <p className={styles.status}>Global: {isGlobal ? "Yes" : "No"}</p>

      {isOpen && <SubmitButton onClick={handleSubmit} />}
    </div>
  );
}