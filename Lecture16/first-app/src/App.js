import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );


  // return true;


  // return (
  //   <div> 
  //     <h1>Hello This is my first react app</h1>
  //   </div>
  // );

  // const NAME = "Cipherschools";
  // return (
  //   <div>
  //     <h1 style={
  //       {
  //         color: "red",
  //         textAlign: "center",
  //       }
  //     }>Hello from {NAME}</h1>
  //   </div>
  // );

  const NAME = "Cipherschools";
  return (
    <div>
      <div>
      <h1 style={
        {
          color: "red",
          textAlign: "center",
        }
      }>Hello from {NAME}</h1>
      </div>
      <div>
        <p>
          This is {NAME}
        </p>
      </div>
    </div>
  );
  // or using empty fragment <>
  return (
    <>
      <div>
      <h1 style={
        {
          color: "red",
          textAlign: "center",
        }
      }>Hello from {NAME}</h1>
      </div>
      <div>
        <p>
          This is {NAME}
        </p>
      </div>
    </>
  );
}

export default App;
