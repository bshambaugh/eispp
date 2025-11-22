import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selections, setSelections] = useState({
    dataVisualization: {
      enabled: true,
      value: "nodeLinkDiagram"
    },
    linkedData: {
      enabled: false,
      value: "ontologyInstancesAndOntologies"
    },
    aiOutput: {
      enabled: true,
      value: "artificialIntelligenceGeneratedDescription"
    }
  });

  const toggleRow = (row) => {
    setSelections(prev => ({
      ...prev,
      [row]: {
        ...prev[row],
        enabled: !prev[row].enabled
      }
    }));
  };

  const handleRadioChange = (row, value) => {
    setSelections(prev => ({
      ...prev,
      [row]: {
        ...prev[row],
        value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = Object.entries(selections)
      .filter(([_, config]) => config.enabled)
      .map(([key, config]) => ({
        group: key,
        selected: config.value
      }));
    console.log("Final selection:", result);
    alert("Check console!\n" + JSON.stringify(result, null, 2));
  };

  return (
    <div className="container">
      <h1>Data Options Selector</h1>
      <form onSubmit={handleSubmit}>

        {/* Row 1 */}
        <div className="option-row">
          <label className="row-checkbox">
            <input
              type="checkbox"
              checked={selections.dataVisualization.enabled}
              onChange={() => toggleRow("dataVisualization")}
            />
            <span className="checkmark"></span>
          </label>

          <div className="radio-group">
            {["opm", "nodeLinkDiagram", "facetedBrowsing"].map(val => {
              const labels = {
                opm: "OPM",
                nodeLinkDiagram: "Node-Link Diagram",
                facetedBrowsing: "Faceted Browsing"
              };
              return (
                <label key={val} className={!selections.dataVisualization.enabled ? "disabled" : ""}>
                  <input
                    type="radio"
                    name="dataVisualization"
                    value={val}
                    checked={selections.dataVisualization.value === val}
                    onChange={() => handleRadioChange("dataVisualization", val)}
                    disabled={!selections.dataVisualization.enabled}
                  />
                  <span className="radio-mark"></span> {labels[val]}
                </label>
              );
            })}
          </div>
        </div>

        {/* Row 2 */}
        <div className="option-row">
          <label className="row-checkbox">
            <input
              type="checkbox"
              checked={selections.linkedData.enabled}
              onChange={() => toggleRow("linkedData")}
            />
            <span className="checkmark"></span>
          </label>

          <div className="radio-group">
            {[
              { value: "ontologyInstancesAndOntologies", label: "Ontology Instances & Ontologies" },
              { value: "firstDegreeLinkedData", label: "1st Degree Linked Data" }
            ].map(item => (
              <label key={item.value} className={!selections.linkedData.enabled ? "disabled" : ""}>
                <input
                  type="radio"
                  name="linkedData"
                  value={item.value}
                  checked={selections.linkedData.value === item.value}
                  onChange={() => handleRadioChange("linkedData", item.value)}
                  disabled={!selections.linkedData.enabled}
                />
                <span className="radio-mark"></span> {item.label}
              </label>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="option-row">
          <label className="row-checkbox">
            <input
              type="checkbox"
              checked={selections.aiOutput.enabled}
              onChange={() => toggleRow("aiOutput")}
            />
            <span className="checkmark"></span>
          </label>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="aiOutput"
                value="artificialIntelligenceGeneratedDescription"
                checked={selections.aiOutput.value === "artificialIntelligenceGeneratedDescription"}
                onChange={() => handleRadioChange("aiOutput", "artificialIntelligenceGeneratedDescription")}
                disabled={!selections.aiOutput.enabled}
              />
              <span className="radio-mark"></span> Artificial Intelligence Generated Description
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit Selections
        </button>
      </form>
    </div>
  );
}