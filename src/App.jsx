import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-4xl font-bold text-red-400 mb-2 text-center">
        HVAC Products Project
      </h1>
      <p className="text-slate-400">
        React + Vite (SWC) + Tailwind CSS v4 is successfully configured!
      </p>
    </div>
  )
}

export default App
