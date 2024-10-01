import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlannerPage from './component/PlannerPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <PlannerPage />
      </div>
     
    </>
  )
}

export default App
