import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('1')

  const handleChange = (e) => {
    const input = e.target.value
    if (input === '' || /^\d+$/.test(input)) {
      setValue(input)
    }
  }

  const isZeroOrEmpty = value === '' || value === '0'
  const num = isZeroOrEmpty ? null : parseInt(value, 10)

  const degreesText = isZeroOrEmpty
    ? 'no degrees'
    : num === 1
      ? 'degree'
      : 'degrees'

  return (
    <div className="container">
      <label className="label">
        Show
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={value}
          onChange={handleChange}
          className={`number-input ${value === '' ? 'empty' : ''}`}
          placeholder=" "   
        />
        {' '}{degreesText} for Linked Data
      </label>

      <p className="result">
        Current value: {isZeroOrEmpty ? 'none' : num} {degreesText}
      </p>
    </div>
  )
}

export default App