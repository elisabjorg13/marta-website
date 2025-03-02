import logo from "./logo.svg";
import "./App.css";
import TwitchPlayer from "./Twitchplayer.js"; // Path to your TwitchPlayer component
function App() {
  return (
    <div className="App">
      <header className="">
        <p>Marta twitch stream</p>
      </header>
      <div>
        <TwitchPlayer channel="martaakadottir" />
      </div>
    </div>
  );
}

export default App;
