import { useState } from "react" 

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('MCU')) // concat returns "new copy" of referenced array, instead of "mutating the existing array directly"
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('DCEU'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}&nbsp;
      <button onClick={handleLeftClick}>MCU</button>
      <button onClick={handleRightClick}>DCEU</button>
      &nbsp;{right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App