import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selections, setSelections] = useState({
    dataVisualization: {
      enabled: true,
      value: "nodeLinkDiagram",
      layout: "Fruchterman Reingold"
    },
    ontologyInstancesAndOntologies: {
      enabled: true
    },
    linkedData: {
      enabled: true,
    },
    aiOutput: {
      enabled: true
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
        value,
        layout: value === "nodeLinkDiagram" ? (prev[row].layout || "ForceAtlas2") : undefined
      }
    }));
  };

  const handleLayoutChange = (e) => {
    setSelections(prev => ({
      ...prev,
      dataVisualization: { ...prev.dataVisualization, layout: e.target.value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = {};

    if (selections.dataVisualization.enabled) {
      result.dataVisualization = { type: selections.dataVisualization.value };
      if (selections.dataVisualization.value === "nodeLinkDiagram") {
        result.dataVisualization.layout = selections.dataVisualization.layout;
      }
    }
    if(selections.ontologyInstancesAndOntologies.enabled) {
      result.ontologyInstancesAndOntologies = true;
    }
    
    if (selections.linkedData.enabled) {
      result.linkedData = true;
    } 
    
    if (selections.aiOutput.enabled) {
      result.aiOutput = true;
    }

    console.log("Submitted:", result);
    alert("Check console!\n" + JSON.stringify(result, null, 2));
  };

  const layoutOptions = [
    "Fruchterman Reingold", "Contraction", "Force Atlas", "Force Atlas 2",
    "Label Adjust", "Noverlap", "OpenOrd", "Random Layout",
    "Rotate", "Yifan Hu", "Yifan Hu Proportional"
  ];

  const isNodeLinkSelected = selections.dataVisualization.enabled && selections.dataVisualization.value === "nodeLinkDiagram";

  return (
    <div className="container">
      <h1>Data Options Selector</h1>
      <form onSubmit={handleSubmit}>

        {/* ROW 1: Data Visualization */}
        <div className="option-row">
          <input
            type="checkbox"
            checked={selections.dataVisualization.enabled}
            onChange={() => toggleRow("dataVisualization")}
            className="row-toggle"
          />
          <div className="options-wrapper">
            <label className="radio-line">
              <input
                type="radio"
                name="dataVisualization"
                value="opm"
                checked={selections.dataVisualization.value === "opm"}
                onChange={() => handleRadioChange("dataVisualization", "opm")}
                disabled={!selections.dataVisualization.enabled}
              />
              OPM
            </label>

            <label className="radio-line">
              <input
                type="radio"
                name="dataVisualization"
                value="nodeLinkDiagram"
                checked={selections.dataVisualization.value === "nodeLinkDiagram"}
                onChange={() => handleRadioChange("dataVisualization", "nodeLinkDiagram")}
                disabled={!selections.dataVisualization.enabled}
              />
              Node-Link Diagram
              {isNodeLinkSelected && (
                <span className="layout-inline">
                  <strong>Layout:</strong>
                  <select value={selections.dataVisualization.layout} onChange={handleLayoutChange}>
                    {layoutOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </span>
              )}
            </label>

            <label className="radio-line">
              <input
                type="radio"
                name="dataVisualization"
                value="facetedBrowsing"
                checked={selections.dataVisualization.value === "facetedBrowsing"}
                onChange={() => handleRadioChange("dataVisualization", "facetedBrowsing")}
                disabled={!selections.dataVisualization.enabled}
              />
              Faceted Browsing
            </label>
          </div>
        </div>

        {/* ROW 2: Ontology Instances and Ontologies */}
        <div className="option-row">
          <label className="full-row-label">
            <input
              type="checkbox"
              checked={selections.ontologyInstancesAndOntologies.enabled}
              onChange={() => toggleRow("ontologyInstancesAndOntologies")}
              className="row-toggle"
            />
            Ontology Instances & Ontologies
          </label>
        </div>

        {/* ROW 3: Linked Data */}
        <div className="option-row">
          <label className="full-row-label">
            <input
              type="checkbox"
              checked={selections.linkedData.enabled}
              onChange={() => toggleRow("linkedData")}
              className="row-toggle"
            />
            1st Degree Linked Data
          </label>
        </div>

        {/* ROW 4: AI Output – single option */}
        <div className="option-row">
          <label className="full-row-label">
            <input
              type="checkbox"
              checked={selections.aiOutput.enabled}
              onChange={() => toggleRow("aiOutput")}
              className="row-toggle"
            />
            Artificial Intelligence Generated Description
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit Selections
        </button>
      </form>
    </div>
  );
}