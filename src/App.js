import logo from './coffee_logo.png';
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          #butfirstcoffee
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link, který budu asi potřebovat
        </a>
      </header>
    </div>
  );
}
ReactDOM.render(
  <h2>Netuším jak smazat tehle margin</h2>, 
  document.getElementById('test')
);

export default App;
