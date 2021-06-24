import logo from './tradinglogo.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my trading app
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/harsh-raj-73a78113b"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on linkedin for more
        </a>
        <a
          className="App-link"
          href="https://github.com/HARSH-07"
          target="_blank"
          rel="noopener noreferrer"
        >
          You can also follow me on github for collaboration
        </a>
      </header>
      
    </div> 

    
  );
}

export default App;
