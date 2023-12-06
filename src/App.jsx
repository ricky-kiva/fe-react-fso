const Hello = (props) => {
  console.log(props)
  return (
  <>
    <p>Hello {props.name}, you are level {props.level}!</p>
  </>
  )
}

const App = () => {
  const name = "Geralt of Rivia"
  const level = 48
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Rickyslash" level={2 + 6}/>
      <Hello name={name} level={level} />
    </>
  )
}

export default App
