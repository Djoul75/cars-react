const Welcome = () => {

  const bonjour = () => {
    console.log('Bonjour');
  }

  const bonsoir = (props) => {
    console.log(props);
  }

  return (
    <div>
      {}
      <button onClick={bonjour}>Invoquer une function</button>

      {}
      <button onClick={() => bonsoir("Bonsoir")}>Invoquer une function avec un argument</button>

      {}
      <button onClick={() => console.log('Bonne nuit')}>Console log avec le bouton</button>
    </div>
  )
}

export default Welcome
