import _ from 'lodash';

(function() {
    const start = () => {
        console.log('ZWayConsole module.js start');
        const a = _.map([1,2], val => val+1);
        console.log(`ZWayConsole module.js ${a.join(',')}`);
    }
    
    const stop = () => {
        console.log('ZWayConsole module.js stop');
    }
    
    start();
    return { stop };
})();
