import _ from 'lodash';

import { startServer, stopServer } from './webServer';

const start = () => {
    console.log('ZWayConsole module.js start');
    const a = _.map([1,2], val => val+1);
    console.log(`ZWayConsole module.js ${a.join(',')}`);
    startServer();
}

const stop = () => {
    console.log('ZWayConsole module.js stop');
    stopServer();
}

setTimeout(start, 1);

export default { stop };
