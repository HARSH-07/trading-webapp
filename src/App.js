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
        <br/>
        <br/>
        <p>Meanwhile you can wath this while the webpage gets updated.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/q1CbkU-jco8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </header>
      
    </div> 

    
  );
}

export default App;
