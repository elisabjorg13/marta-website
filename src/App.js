import logo from "./logo.svg";
import "./App.css";
import TwitchPlayer from "./Twitchplayer.js"; // Path to your TwitchPlayer component
function App() {
  return (
    <div className="App">
      <header className="">
        <img
          src={`${process.env.PUBLIC_URL}/MARTAsuuðemoji.png`}
          alt="Marta streaming"
          className="emoji-image"
        />
      </header>
      <div className="bodys">
        <img
          src={`${process.env.PUBLIC_URL}/MARTAtitillsuuuuð.png`}
          alt="Marta streaming"
       
          className="title-image"
        />

          <TwitchPlayer channel="martaakadottir" />
     
      </div>
    </div>
  );
}

export default App;
