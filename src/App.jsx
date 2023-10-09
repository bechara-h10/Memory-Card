import { useState } from "react";
import "./App.css";
import StartMenu from "./components/StartMenu";
import Help from "./components/Help";

function App() {
  const [helpStatus, setHelpStatus] = useState(false);
  return (
    <main>
      <StartMenu setHelpStatus={setHelpStatus} />
      <Help helpStatus={helpStatus} setHelpStatus={setHelpStatus} />
    </main>
  );
}

export default App;
