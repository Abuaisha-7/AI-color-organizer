import { useState } from 'react'
import AddColorForm from './components/AddColorForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <AddColorForm/>
    </div>
  )
}

export default App
