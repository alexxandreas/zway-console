/* global globals */

// Полифил для es5
// import '@babel/polyfill';
// import 'core-js/object/assign';
import 'core-js/modules/es6.object.assign';

import WebServer, { sendFile } from './WebServer';

let webServer;



const start = () => {
    console.log('module.js start');

    const rootHandler = () => sendFile(globals.fsRoot + 'htdocs/index.html');
    
    webServer = new WebServer('zwayconsole');
    
    webServer.addRoute('', rootHandler);
    webServer.addRoute('/', rootHandler);
    webServer.addRoute('/index.html', rootHandler);
    
    webServer.addRoute('/htdocs/:path', args => sendFile(globals.fsRoot + 'htdocs/' + args[0]));
}

const stop = () => {
    console.log('module.js stop');
    webServer.destroy();
}

setTimeout(start, 1);

export default { stop };
