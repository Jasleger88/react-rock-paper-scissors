import './App.css'
import React from 'react'


function App() {
  const [playerChoice, setPlayerChoice] = React.useState('')
  const [computerChoice, setComputerChoice] = React.useState('')
  const [result, setResult] = React.useState('')


  const choicesForGame = ['rock', 'paper', 'scissors']

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a Tie");
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      setResult("Player Wins!")
    } else {
      setResult('Computer Wins!')
    }
  };

  const handleClick = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = choicesForGame[Math.floor(Math.random() * choicesForGame.length)]
    setComputerChoice(computerChoice);
    determineWinner(choice, [computerChoice]);
  };

  const handleReset = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
  }

 
  return (
    <div className="game">
      <p>Player 1 chose: <span>{playerChoice}</span></p>
      <p>Player 2 chose: <span>{computerChoice}</span></p>
      <p className="result">{result}</p>
      <button onClick={() => handleClick('rock')}>Rock</button>
      <button onClick={() => handleClick('paper')}>Paper</button>
      <button onClick={() => handleClick('scissors')}>Scissors</button>
      <button id="reset" onClick={handleReset}>reset</button>
    </div>
  )
}


export default App
