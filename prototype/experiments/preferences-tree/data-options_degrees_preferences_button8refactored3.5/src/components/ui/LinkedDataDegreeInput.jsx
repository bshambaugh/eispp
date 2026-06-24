import { useState, useEffect } from "react";
import styles from "./LinkedDataDegreeInput.module.css";

export default function LinkedDataDegreeInput({ value, onChange }) {
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^\d+$/.test(val)) {
      setInputValue(val);
      onChange(val === "" ? 0 : parseInt(val, 10));
    }
  };

  const num = value;
  const degreesText = num === 0 ? "no degrees" : num === 1 ? "degree" : "degrees";

  return (
    <label className={styles.label}>
      Show
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={inputValue}
        onChange={handleChange}
        className={`${styles.input} ${inputValue === "" || inputValue === "0" ? styles.empty : ""}`}
        placeholder=" "
      />
      {degreesText} for Linked Data
    </label>
  );
}