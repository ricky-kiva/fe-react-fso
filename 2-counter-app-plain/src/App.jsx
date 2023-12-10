import { useState } from "react" 

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  
  return (
    <div>
      <Display counter={counter} />
      <CounterButton onClick={increaseByOne} text='Plus' />
      <CounterButton onClick={setToZero} text='Zero' />
      <CounterButton onClick={decreaseByOne} text='Minus' />
    </div>
  )
}

const Display = ({ counter }) => 
  <div>{counter}</div>


const CounterButton = ({ onClick, text }) =>
  <button onClick={onClick}>{text}</button>

export default App