import { useState } from 'react'
import './App.css'
import Left from './Left'
import Right from './Right'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='left'>
        <Left></Left>
      </div>
      <div className='right'>
        <Right></Right>
      </div>
    </div>
  )
}

export default App
