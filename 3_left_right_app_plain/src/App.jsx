import { useState } from "react" 

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('MCU')) // concat returns "new copy" of referenced array, instead of "mutating the existing array directly"
    const updatedLeft = left + 1 // we use this because react's "state update" is asynchronous (not immidiately, but "at some point")
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('DCEU'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}&nbsp;
      <button onClick={handleLeftClick}>MCU</button>
      <button onClick={handleRightClick}>DCEU</button>
      &nbsp;{right}
      <p>{allClicks.join(' ')}</p>
      <p>Total: {total}</p>
    </div>
  )
}

export default App