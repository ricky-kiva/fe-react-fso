const Hello = ({ name, level }) => {

  const playedSince = () => new Date().getFullYear() - level

  return (
  <>
    <p>Hello {name}, you are level {level}!</p>
    <p>Game&apos;s pretty though, need a year to step-up 1 level. So you play since {playedSince()}?</p>
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