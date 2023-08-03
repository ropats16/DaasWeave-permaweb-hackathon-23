// import logo from "./logo.svg";
import "./App.css";
import Wallet from "./Wallet";
import myImage from "./logo1.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myImage} className="App-logo1" alt="logo" />
        <p>Data as a Service</p>
        <Wallet></Wallet>
      </header>
    </div>
  );
}

export default App;
