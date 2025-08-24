import { useEffect, useState } from 'react'
import './App.css'

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [suggestedText, setSuggestedText] = useState("");
  const [inputText,setInputText]=useState('');

  useEffect(()=>{
    const words = inputText.split(" ");
    const lastWord = words[words.length - 1];
    if (customDictionary[lastWord.toLocaleLowerCase()]) {
      setSuggestedText(customDictionary[lastWord.toLocaleLowerCase()]);
    } else {
      setSuggestedText("");
    }
  },[inputText])
  return (
       <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
      </div>
  )
}

export default App
