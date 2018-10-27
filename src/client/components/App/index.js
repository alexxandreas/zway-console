import React, { Component } from 'react';
import ObjectInspector from 'react-object-inspector';

import Terminal from 'terminal-in-react';

const printResult = data => {
    switch (typeof data) {
        case 'object':
        // key={`object-${i}`}
            return <ObjectInspector data={data} />;
        case 'function':
            return `${data}`;
        default:
            return data;
      }
}

const commandPassThrough = (cmd, print) => {
    var command = cmd.join('');
    try {
        var result = eval(command);
        console.warn(result);
        print(printResult(result));
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

