import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import GenerateImg from './component/GenerateImg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GenerateImg />
    </>
  )
}

export default App
