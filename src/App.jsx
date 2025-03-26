import { useState } from 'react'
import { InputBox } from './components'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-orange-500'>Currency App</h1>
    </>
  )
}

export default App
