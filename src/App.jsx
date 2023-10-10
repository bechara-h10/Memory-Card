import { useState } from "react";
import "./App.css";
import StartMenu from "./components/StartMenu";
import Help from "./components/Help";
import Cards from "./components/Cards";
import characters from "./characters";
import Score from "./components/Score";
import { useEffect } from "react";
import LossMessage from "./components/LossMessage";

function App() {
  const [messageStatus, setMessageStatus] = useState(false);
  const [helpStatus, setHelpStatus] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [clickedChracters, setClickedCharacters] = useState([]);
  useEffect(() => {
    const shuffled = [...characters].sort(() => 0.5 - Math.random());
    setSelectedCharacters(shuffled.slice(0, 3));
  }, [score]);
  const handleOnCardClick = (e) => {
    const characterId = e.target.closest(".card").id;
    if (clickedChracters.includes(characterId)) {
      setMessageStatus(true);
      setTimeout(() => {
        startGame();
        setMessageStatus(false);
      }, 1000);
      if (score > bestScore) {
        localStorage.setItem("bestScore", score);
        setBestScore(score);
      }
    } else {
      setClickedCharacters([...clickedChracters, characterId]);
      setScore(score + 1);
    }
  };

  const startGame = () => {
    setBestScore(localStorage.getItem("bestScore"));
    setScore(0);
    setClickedCharacters([]);
    setIsStarted(true);
  };
  return (
    <main>
      {!isStarted && (
        <StartMenu setMessageStatus={setHelpStatus} startGame={startGame} />
      )}
      {isStarted && (
        <>
          <Cards characters={selectedCharacters} onClick={handleOnCardClick} />
          <Score score={score} bestScore={bestScore} />
        </>
      )}
      <Help helpStatus={helpStatus} setHelpStatus={setHelpStatus} />
      <LossMessage
        messageStatus={messageStatus}
        setMessageStatus={setMessageStatus}
      />
    </main>
  );
}

export default App;
