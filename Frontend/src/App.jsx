import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-4xl flex justify-center items-center font-bold bg-slate-950 h-screen w-screen' >
        <div className='h-60 w-[40rem] flex justify-center items-center text-white border-2 border-white/[0.5] rounded-2xl' >
          Bhai Mera <span className='text-orange-600 mx-2 text-5xl' > Sher</span> Hai !!!
        </div>
      </div>
    </>
  )
}

export default App
