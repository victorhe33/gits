import { useState } from 'react'
import Surprise from '../other/Surprise'
import '../App.css'

const Counter = () => {
  const [count, updateCount] = useState(0)

  const incrementCount = () => {
    updateCount(count + 1)
  }

  const decrementCount = () => {
    if (count > 0) updateCount(count - 1)
  }

  return (
    <div className="counter">
      {count === 25 ? (
        <Surprise />
      ) : (
        <div>
          <h3>{count}</h3>
          <div className="button-container">
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
          </div>
        </div>
      )}
      <div>
        <button onClick={() => updateCount(0)}>RESET</button>
      </div>
    </div>
  )
}

export default Counter
