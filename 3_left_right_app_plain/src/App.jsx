import { useState } from "react" 

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('Shark')) // concat returns "new copy" of referenced array, instead of "mutating the existing array directly"
    const updatedLeft = left + 1 // we use this because react's "state update" is asynchronous (not immidiately, but "at some point")
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('Dolphin'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return ( <p>The app is used by pressing the buttons</p> )
    } else {
      return ( <p>Button press history: {props.allClicks.join(' ')}</p> )
    }
  }

  const CustomButton = ({handleClick, text }) =>
    <button onClick={handleClick}>{text}</button>

  return (
    <div>
      {left}&nbsp;
      <CustomButton handleClick={handleLeftClick} text="Shark" />
      <CustomButton handleClick={handleRightClick} text="Dolphin" />
      &nbsp;{right}
      <History allClicks={allClicks} />
      <p>Total: {total}</p>
    </div>
  )
}

export default App