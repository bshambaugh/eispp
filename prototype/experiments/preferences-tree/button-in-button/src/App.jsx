import { useState } from 'react';
import TagButton from './components/TagButton';
import './App.css';

function App() {
  const [tags, setTags] = useState(['Hide Type']);

  const removeTag = (text) => {
    setTags(tags.filter((tag) => tag !== text));
  };

  return (
    <div className="App">
      {tags.map((tag, index) => (
        <TagButton key={index} text={tag} onRemove={() => removeTag(tag)} />
      ))}
    </div>
  );
}

export default App;