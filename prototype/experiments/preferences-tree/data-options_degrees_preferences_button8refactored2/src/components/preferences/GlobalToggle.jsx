import styles from "./GlobalToggle.module.css";

export default function GlobalToggle({ checked, onChange }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={styles.checkbox}
        />
        Make Global for All Data Visualization
      </label>
    </div>
  );
}