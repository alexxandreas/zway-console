/* global globals */

// Полифил для es5
// import '@babel/polyfill';
// import 'core-js/object/assign';
import 'core-js/modules/es6.object.assign';

import WebServer, { sendFile, sendJSON, sendError } from './WebServer';
import { stringify } from '../helpers/json';

let webServer;



const start = () => {
    console.log('module.js start');

    const rootHandler = () => sendFile(globals.fsRoot + 'htdocs/index.html');
    
    webServer = new WebServer('zwayconsole');
    
    webServer.addRoute('', rootHandler);
    webServer.addRoute('/', rootHandler);
    webServer.addRoute('/index.html', rootHandler);
    
    webServer.addRoute('/htdocs/:path', args => sendFile(globals.fsRoot + 'htdocs/' + args[0]));
    
    webServer.addRoute('/api/eval/:code', function(args) {
        var code = args[0];
        code = decodeURIComponent(code);
        try {
            var result = eval(code);
            if (result === undefined)
                result = 'undefined';

            result = stringify(result);

            return sendJSON(result);
        }
        catch (err) {
            // var errObj = {
            //     text: err.toString(),
            //     stack: err.stack.replace('\\n', '\n')
            // };
            // return sendError(500, errObj);
            
            const stack = err.stack.replace('\\n', '\n');

            return sendJSON(stack);
        }
    }, this);
}

const stop = () => {
    console.log('module.js stop');
    webServer.destroy();
}

setTimeout(start, 1);

export default { stop };
