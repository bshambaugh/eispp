import { useState, useEffect } from "react";
import LinkedDataDegreeInput from "../ui/LinkedDataDegreeInput";
import styles from "./DataOptionsSelection.module.css";

export default function DataOptionsSection({ onChange }) {
  const [selections, setSelections] = useState({
    dataVisualization: { enabled: true, value: "nodeLinkDiagram", layout: "Force Atlas 2" },
    ontologyInstancesAndOntologies: { enabled: true },
    linkedData: { enabled: true, degree: 1 },
    aiOutput: { enabled: true },
  });

  useEffect(() => {
    const result = {};

    if (selections.dataVisualization.enabled) {
      result.dataVisualization = {
        type: selections.dataVisualization.value,
        ...(selections.dataVisualization.value === "nodeLinkDiagram" && {
          layout: selections.dataVisualization.layout,
        }),
      };
    }

    if (selections.ontologyInstancesAndOntologies.enabled) result.ontologyInstancesAndOntologies = true;
    if (selections.linkedData.enabled && selections.linkedData.degree > 0)
      result.linkedData = { degree: selections.linkedData.degree };
    if (selections.aiOutput.enabled) result.aiOutput = true;

    onChange(result);
  }, [selections, onChange]);

  const toggleRow = (key) =>
    setSelections((prev) => ({
      ...prev,
      [key]: { ...prev[key], enabled: !prev[key].enabled },
    }));

  const handleRadioChange = (value) => {
    setSelections((prev) => ({
      ...prev,
      dataVisualization: {
        ...prev.dataVisualization,
        value,
        layout: value === "nodeLinkDiagram" ? prev.dataVisualization.layout || "Force Atlas 2" : undefined,
      },
    }));
  };

  const handleLayoutChange = (e) => {
    setSelections((prev) => ({
      ...prev,
      dataVisualization: { ...prev.dataVisualization, layout: e.target.value },
    }));
  };

  const handleDegreeChange = (degree) => {
    setSelections((prev) => ({
      ...prev,
      linkedData: { ...prev.linkedData, degree, enabled: degree > 0 },
    }));
  };

  const layoutOptions = [
    "Fruchterman Reingold", "Contraction", "Force Atlas", "Force Atlas 2",
    "Label Adjust", "Noverlap", "OpenOrd", "Random Layout",
    "Rotate", "Yifan Hu", "Yifan Hu Proportional"
  ];

  const isNodeLink = selections.dataVisualization.enabled && selections.dataVisualization.value === "nodeLinkDiagram";

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <input 
          type="checkbox" 
          checked={selections.dataVisualization.enabled} 
          onChange={() => toggleRow("dataVisualization")} 
          className={styles.checkbox}
        />
        <div className={styles.options}>
          {["opm", "nodeLinkDiagram", "facetedBrowsing"].map((val) => (
            <label key={val} className={styles.radioLabel}>
              <input
                type="radio"
                name="viz"
                value={val}
                checked={selections.dataVisualization.value === val}
                onChange={() => handleRadioChange(val)}
                disabled={!selections.dataVisualization.enabled}
              />
              <span>
                {val === "opm" && "OPM"}
                {val === "nodeLinkDiagram" && "Node-Link Diagram"}
                {val === "facetedBrowsing" && "Faceted Browsing"}
                {val === "nodeLinkDiagram" && isNodeLink && (
                  <span className={styles.layoutInline}>
                    <strong>Layout:</strong>
                    <select value={selections.dataVisualization.layout} onChange={handleLayoutChange}>
                      {layoutOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <label className={styles.fullRowLabel}>
          <input 
            type="checkbox" 
            checked={selections.ontologyInstancesAndOntologies.enabled} 
            onChange={() => toggleRow("ontologyInstancesAndOntologies")} 
            className={styles.checkbox}
          />
          Ontology Instances & Ontologies
        </label>
      </div>

      <div className={styles.row}>
        <input 
          type="checkbox" 
          checked={selections.linkedData.enabled} 
          onChange={() => toggleRow("linkedData")} 
          className={styles.checkbox}
        />
        <LinkedDataDegreeInput value={selections.linkedData.degree} onChange={handleDegreeChange} />
      </div>

      <div className={styles.row}>
        <label className={styles.fullRowLabel}>
          <input 
            type="checkbox" 
            checked={selections.aiOutput.enabled} 
            onChange={() => toggleRow("aiOutput")} 
            className={styles.checkbox}
          />
          Artificial Intelligence Generated Description
        </label>
      </div>
    </div>
  );
}