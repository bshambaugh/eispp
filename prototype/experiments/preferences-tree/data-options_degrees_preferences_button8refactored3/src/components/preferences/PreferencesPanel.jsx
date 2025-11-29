import { useState } from "react";
import DataOptionsSection from "./DataOptionsSelection";
import TabbedTextField from "./TabbedTextField";
import GlobalToggle from "./GlobalToggle";
import SubmitButton from "./SubmitButton";
import styles from "./PreferencesPanel.module.css";

export default function PreferencesPanel() {
  const [isOpen, setIsOpen] = useState(true);
  const [dataOptions, setDataOptions] = useState({});
  const [corelenses, setLensCore] = useState([]);
  const [formatlenses, setLensFormatCore] = useState([]);
  const [graphstylesheets, setGraphStyleSheets] = useState([]);
  const [isGlobal, setIsGlobal] = useState(false);

  const handleSubmit = () => {
    const finalData = {
      preferences: dataOptions,
      corelenses: corelenses,
      formatlenses: formatlenses,
      graphstylesheets: graphstylesheets,
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
          <p>Fresnel Lens (Lens-Core)</p> {/* Add Load Data Button here */}
          <TabbedTextField onChange={setLensCore} />
          <p>Fresnel Lens (Format-Core)</p> {/* Add Load Data Button here */}
          <TabbedTextField onChange={setLensFormatCore} />
          <p>Graph Style Sheets)</p> {/* Add Load Data Button here */}
          <TabbedTextField onChange={setGraphStyleSheets} />
          <GlobalToggle checked={isGlobal} onChange={setIsGlobal} />
        </div>
      )}

      {isOpen && <SubmitButton onClick={handleSubmit} />}
    </div>
  );
}