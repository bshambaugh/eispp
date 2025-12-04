// PreferencesPanel.jsx
import { useState } from "react";
import CollapsibleSection from "./CollapsibleSection";
import DataOptionsSection from "./DataOptionsSelection";
import TabbedTextField from "./TabbedTextField";
import GlobalToggle from "./GlobalToggle";
import SubmitButton from "./SubmitButton";

export default function PreferencesPanel() {
  const [dataOptions, setDataOptions] = useState({});
  const [corelenses, setLensCore] = useState([]);
  const [formatlenses, setLensFormatCore] = useState([]);
  const [graphstylesheets, setGraphStyleSheets] = useState([]);
  const [isGlobal, setIsGlobal] = useState(false);

  const handleSubmit = () => {
    const finalData = {
      preferences: dataOptions,
      corelenses,
      formatlenses,
      graphstylesheets,
      global: isGlobal,
    };
    console.log("Submitted:", finalData);
    alert("Check console!\n" + JSON.stringify(finalData, null, 2));
  };

  const sharedFooter = <SubmitButton onClick={handleSubmit} />;

  return (
    <>
      {/* 1. Natural Language Query Default */}
      <CollapsibleSection title="View:" defaultOpen={true} footer={sharedFooter}>
        {/*By default when I run a Natural Language Query Show: */}
        <DataOptionsSection onChange={setDataOptions} />
        <p><strong>Fresnel Lens (Lens-Core)</strong></p>
        <TabbedTextField onChange={setLensCore} />
        <p><strong>Fresnel Lens (Format-Core)</strong></p>
        <TabbedTextField onChange={setLensFormatCore} />
        <p><strong>Graph Style Sheets</strong></p>
        <TabbedTextField onChange={setGraphStyleSheets} />
        <GlobalToggle checked={isGlobal} onChange={setIsGlobal} />
      </CollapsibleSection>

        {/* 3. Applications */}
        <CollapsibleSection title="Applications:" footer={sharedFooter}>
        <p>Manage application-specific settings...</p>
      </CollapsibleSection>

      {/* 2. High Performance Computing */}
      <CollapsibleSection title="High Performance Computing:" footer={sharedFooter}>
        <p>Configure HPC protocols, middleware, frameworks, and node collections.</p>
        {/* Example future content */}
        <label>
          Protocol: <input type="text" placeholder="e.g. P2P-MPI" />
        </label>
        <label>
          Application: <input type="text" placeholder="e.g. OpenFoam" />
        </label>
      </CollapsibleSection>

      {/* 4. Value Network & Payments */}
      <CollapsibleSection title="Value Network & Payments:" footer={sharedFooter}>
        <p>Track data lineage and history...</p>
      </CollapsibleSection>

      {/* 4. Edit Triples */}
      <CollapsibleSection title="Edit Triples:" footer={sharedFooter}>
        <p>Track data lineage and history...</p>
      </CollapsibleSection>
    

      {/* 4. Provenance */}
      <CollapsibleSection title="Provenance:" footer={sharedFooter}>
        <p>Track data lineage and history...</p>
      </CollapsibleSection>

      {/* 4. Provenance */}
      <CollapsibleSection title="Production:" footer={sharedFooter}>
        <p>Track data lineage and history...</p>
      </CollapsibleSection>

      {/* Add as many as you want — super easy now! */}
      <CollapsibleSection title="Internet of Things:" footer={sharedFooter}>
        <p>IoT device integration settings...</p>
      </CollapsibleSection>
      
      {/* 5. Protege */}
      <CollapsibleSection title="Protégé:" footer={sharedFooter}>
        <p>Ontology editing preferences</p>
        <label>
          Target Server:{" "}
          <input
            type="url"
            defaultValue="http://webprotege.stanford.edu"
            style={{ width: "100%" }}
          />
        </label>
      </CollapsibleSection>

      <CollapsibleSection title="LDBrowser:" footer={sharedFooter}>
        <p>Linked Data browser preferences...</p>
      </CollapsibleSection>

      <CollapsibleSection title="Ontology Browser:" footer={sharedFooter}>
        <p>Linked Data browser preferences...</p>
      </CollapsibleSection>

      <CollapsibleSection title="SPARQL:" footer={sharedFooter}>
        <p>Linked Data browser preferences...</p>
      </CollapsibleSection>

      <CollapsibleSection title="Load Data:" footer={sharedFooter}>
        <p>Linked Data browser preferences...</p>
      </CollapsibleSection>
    </>
  );
}