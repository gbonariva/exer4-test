import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, my name is <code>Giuseppe</code> and...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm Learning React at <b>Scrimba </b>
          with a course from Bob Ziroll
        </a>
      </header>
    </div>
  );
}

export default App;
