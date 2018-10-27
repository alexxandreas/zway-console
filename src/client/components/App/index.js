import React, { Component } from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';
import Terminal from 'terminal-in-react';

const commandPassThrough = (cmd, print) => {
    var command = cmd.join('');
    try {
        var result = eval(command);
        console.warn(result);
        print(result);
    } catch (err) {
        print(err.stack());
    }
};

class App extends Component {

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal 
          color='green'
          backgroundColor='black'
          barColor='black'
          showActions={false}
          hideTopBar
          allowTabs={false}
          style={{ 
            fontWeight: "bold", 
            fontSize: "1em",
            width: "100%" 
          }}
          startState='maximised'
          commandPassThrough={commandPassThrough} 
        />
      </div>
    );
  }
}
export default App;

