import React from 'react'
import Counter from './Counter'
import { useState } from 'react'

function App() {
    const [state, setState] = useState(false)
  return (
    // Mounting and Unmounting
    <div className='App'>
      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
      {/* state = false;
      !state = true;
      setState(true);
      state = true; 
      Ternary operator below */}
      {/* { state ? <Counter  /> : null} */}
      {/* And operator below */}
      { state && <Counter  />}

    </div>
  )
}

export default App
