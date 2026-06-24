// src/components/preferences/GlobalToggle.jsx
export default function GlobalToggle({ checked, onChange }) {
    return (
      <div style={{ margin: "1.5rem 0" }}>
        <label style={{ fontSize: "15px", cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            style={{ marginRight: "8px" }}
          />
          Make Global for All Data Visualization
        </label>
      </div>
    );
  }