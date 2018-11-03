import React, { Component } from 'react';
import ObjectInspector from 'react-object-inspector';
import SplitPane from 'react-split-pane';
import autoBind from 'auto-bind';
import axios from 'axios';

// import Terminal from 'terminal-in-react';
import Inspector from 'react-inspector'
import { chromeDark } from 'react-inspector'
import { ObjectRootLabel } from 'react-inspector'
import { ObjectLabel } from 'react-inspector'
import brace from 'brace';
import AceEditor from 'react-ace';
import Promise from 'bluebird';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import styles from './styles'; 
import Preloader from '../Preloader';


const inspectorNodeRenderer = ({ depth, name, data, isNonenumerable, expanded }, { theme }) => {
    const renderItem = data => depth === 0
        ? <ObjectRootLabel name={name} data={data} />
        : <ObjectLabel name={name} data={data} isNonenumerable={isNonenumerable} />;
      
    if (typeof data === 'string') {
        return (
            <React.Fragment>
                { data.split('\n').map((item, i) => (<div key={i}>{ renderItem(item) }</div>)) }
            </React.Fragment>
        )
    } else {
        return renderItem(data);
    }
}

const run = command => new Promise((resolve, reject) => {
    var encoded = encodeURIComponent(command);
    return axios({
        method: 'GET',
        url: 'api/eval/' + encoded,
        // params: options.params,
        // data: options.data
    }).then(function(response) {
        var data = response && response.data || response;
        // return data;
        resolve(data);
        // if (typeof response.data == 'string') {
        //     var data = response.data;
        // }
        // else {
        //     var data = JSON.stringify(response.data, null, '  ');
        // }
        // return data;
    },
    function(response) {
        var data = response && response.data || response;
        // return data;
        resolve(data);
        // if (typeof data != 'string') {
        //     data = JSON.stringify(data, null, '  ');
        // }
        // return data;
    });
    
// }
    // try {
    //     var result = eval(command);
    //     resolve(result);
    // } catch (err) {
    //     resolve(err.stack);
    // }
});

    

class App extends Component {
    
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            output: undefined,
            input: '',
            editorHeight: null,
            editorWidth: null
        }
    }
    
    onInputChange(newValue) {
        this.setState(state => ({...state, input: newValue}));
    }
    
    runCommand() {
        const { input } = this.state;
        this.setState(state => ({...state, showPrelader: true}));
        // this.showPrelader();
        run(input).then(result => {
            // this.hidePreloader();
            this.setState(state => ({...state, output: result, showPrelader: false}));
        })
    }
    
    onSplitPaneDragFinished() {
        var a = this.aceWrapper;
        this.setState(state => ({ 
            ...state, 
            editorHeight: `${this.aceWrapper.clientHeight}px`,
            editorWidth: `${this.aceWrapper.clientWidth}px`
        }));
    }
    
    render() {
        const { input, output, editorHeight, editorWidth, showPrelader } = this.state;
        return (
            <div>
            
            <SplitPane 
                split="horizontal" onDragFinished={this.onSplitPaneDragFinished} 
                defaultSize='70%' 
            >
                <Inspector theme='chromeDark' data={output} nodeRenderer={inspectorNodeRenderer}/>
                <div ref={(element)=>this.aceWrapper=element}>
                    <AceEditor
                        mode="javascript"
                        theme="monokai"
                        onChange={this.onInputChange}
                        name="UNIQUE_ID_OF_DIV"
                        width={editorWidth || '100%'}
                        height={editorHeight || '100%'}
                        value={input}
                        commands={[{   // commands is array of key bindings.
                            name: 'run', //name for the key binding.
                            bindKey: {win: 'Ctrl-Enter', mac: 'Command-Enter'}, //key combination used for the command.
                            exec: this.runCommand  //function to execute when keys are pressed.
                        }]}
                      />
                </div>
            </SplitPane>
            { showPrelader && <Preloader className={styles.preloader}/>}
            </div>
        );
    }
}


export default App;