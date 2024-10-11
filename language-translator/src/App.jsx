import { useState } from 'react'
import TextTranslator from './component/TextTranslator'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TextTranslator />
    </>
  )
}

export default App
