import * as React from 'react';
import './App.css';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Decrement from './components/Decrement';
import Increment from './components/Increment';
import Todos2 from './components/Todos2';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h3>Counter</h3>
        <Counter />
        <Decrement />
        <Increment />
        <h3>Counter 2</h3>
        <Counter2 />
        <h3>Counter 3</h3>
        <Counter3 />
        <h3>Todos 2</h3>
        <Todos2 />
      </div>
    );
  }
}

export default App;
