// Полифил для es5
import '@babel/polyfill';

import _ from 'lodash';

import WebServer, { sendFile } from './WebServer';

let webServer;

const rootHandler = () => sendFile('htdocs/index.html');

const start = () => {
    console.log('ZWayConsole module.js start');
    const a = _.map([1,2], val => val+1);
    console.log(`ZWayConsole module.js ${a.join(',')}`);
    
    webServer = new WebServer('zwayconsole');
    
    webServer.addRoute('', rootHandler);
    webServer.addRoute('/', rootHandler);
    webServer.addRoute('/index.html', rootHandler);
}

const stop = () => {
    console.log('ZWayConsole module.js stop');
    webServer.destroy();
}

setTimeout(start, 1);

export default { stop };
