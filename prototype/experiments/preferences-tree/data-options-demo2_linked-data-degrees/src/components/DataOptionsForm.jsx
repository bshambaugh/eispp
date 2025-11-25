import { useState } from "react";
import LinkedDataDegreeInput from "./LinkedDataDegreeInput";

export default function DataOptionsForm() {
  const [selections, setSelections] = useState({
    dataVisualization: {
      enabled: true,
      value: "nodeLinkDiagram",
      layout: "Force Atlas 2"
    },
    ontologyInstancesAndOntologies: { enabled: true },
    linkedData: { enabled: true, degree: 1 },
    aiOutput: { enabled: true }
  });

  const toggleRow = (row) => {
    setSelections(prev => ({
      ...prev,
      [row]: { ...prev[row], enabled: !prev[row].enabled }
    }));
  };

  const handleRadioChange = (row, value) => {
    setSelections(prev => ({
      ...prev,
      [row]: {
        ...prev[row],
        value,
        layout: value === "nodeLinkDiagram" ? (prev[row].layout || "Force Atlas 2") : undefined
      }
    }));
  };

  const handleLayoutChange = (e) => {
    setSelections(prev => ({
      ...prev,
      dataVisualization: { ...prev.dataVisualization, layout: e.target.value }
    }));
  };

  const handleDegreeChange = (degree) => {
    setSelections(prev => ({
      ...prev,
      linkedData: { ...prev.linkedData, degree, enabled: degree > 0 }
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

    if (selections.ontologyInstancesAndOntologies.enabled) {
      result.ontologyInstancesAndOntologies = true;
    }

    if (selections.linkedData.enabled && selections.linkedData.degree > 0) {
      result.linkedData = { degree: selections.linkedData.degree };
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

        {/* Data Visualization */}
        <div className="option-row">
          <input
            type="checkbox"
            checked={selections.dataVisualization.enabled}
            onChange={() => toggleRow("dataVisualization")}
            className="row-toggle"
          />
          <div className="options-wrapper">
            {["opm", "nodeLinkDiagram", "facetedBrowsing"].map(val => (
              <label key={val} className="radio-line">
                <input
                  type="radio"
                  name="dataVisualization"
                  value={val}
                  checked={selections.dataVisualization.value === val}
                  onChange={() => handleRadioChange("dataVisualization", val)}
                  disabled={!selections.dataVisualization.enabled}
                />
                {val === "opm" && "OPM"}
                {val === "nodeLinkDiagram" && "Node-Link Diagram"}
                {val === "facetedBrowsing" && "Faceted Browsing"}
                {val === "nodeLinkDiagram" && isNodeLinkSelected && (
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
            ))}
          </div>
        </div>

        {/* Ontology */}
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

        {/* Linked Data with Degree Input */}
        <div className="option-row">
          <input
            type="checkbox"
            checked={selections.linkedData.enabled}
            onChange={() => toggleRow("linkedData")}
            className="row-toggle"
            disabled={selections.linkedData.degree === 0}
          />
          <LinkedDataDegreeInput
            value={selections.linkedData.degree}
            onChange={handleDegreeChange}
          />
        </div>

        {/* AI Output */}
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