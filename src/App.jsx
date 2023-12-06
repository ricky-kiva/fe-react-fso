const Hello = (props) => {
  console.log(props)
  return (
  <>
    <p>Hello {props.name}, you are level {props.level}!</p>
  </>
  )
}

const App = () => {
  const characters = [
    { name: "Rickyslash", level: 8 },
    { name: "Geralt of Rivia", level: 48 }
  ]

  return (
    <>
      <h1>Greetings</h1>
      <Hello name={characters[0].name} level={characters[0].level}/>
      <Hello name={characters[1].name} level={characters[1].level} />
    </>
  )
}

export default App
