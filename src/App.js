import logo from './logo.svg';
import './App.css';
import FunctionDemo from './FunctionDemo';
import ArgumentFunction from './FunctionArgument';
import ClassComponent from './ClassComponent';

function App() {
  var fruit = ["Mango","Apple","Orange","JackFruit"]
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <h1 color="red">This is a AppFunction</h1>
        <AppDemo/>
        <FunctionDemo/>
        <ArgumentFunction name="rohan" id="1314" arr={fruit} />
        <ClassComponent vill="Rakhilya"/>
        <h2>this is h2</h2>
      </header>
    </div>
  );
}
function AppDemo(){
  return (
    <p>This is AppDemo component</p>
  )
}

export default App;
