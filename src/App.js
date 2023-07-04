import logo from './logo.svg';
import './index.css';
import './App.css';

function App() {
  const x = window.location.origin;
  const Y = x.replace(':3000',':5555');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{cursor:"pointer", background:"#ffffff20", display:'inline-flex', padding:"8px 16px",boxSizing:"border-box",borderRadius:"4px"}} onClick={()=>{console.log(window.location.href = Y)}}> parte PHP puerto :5555</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
