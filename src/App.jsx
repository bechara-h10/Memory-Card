import { useState } from "react";
import "./App.css";
import StartMenu from "./components/StartMenu";
import Help from "./components/Help";
import Cards from "./components/Cards";
import characters from "./characters";

function App() {
  const [helpStatus, setHelpStatus] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const selectedCharacters = [characters[0], characters[1], characters[2]];
  return (
    <main>
      {!isStarted && (
        <StartMenu setHelpStatus={setHelpStatus} setIsStarted={setIsStarted} />
      )}
      {isStarted && <Cards characters={selectedCharacters} />}
      <Help helpStatus={helpStatus} setHelpStatus={setHelpStatus} />
    </main>
  );
}

export default App;
