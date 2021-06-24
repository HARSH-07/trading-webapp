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
      </header>
      
    </div> 

    
  );
}

export default App;
