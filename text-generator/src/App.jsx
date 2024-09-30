import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const loremTexts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

const App = () => {
  const [loremText, setLoremText] = useState('');

  const generateLoremText = () => {
    const randomIndex = Math.floor(Math.random() * loremTexts.length);
    setLoremText(loremTexts[randomIndex]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lorem Text Generator</h1>
      <button onClick={generateLoremText}>Generate Lorem Text</button>
      <p>{loremText}</p>
    </div>
  );
};

export default App;
