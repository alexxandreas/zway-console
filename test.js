(function() {
    function start() {
        console.log('ZWayConsole index.js start');
    }
    
    function stop() {
        console.log('ZWayConsole index.js stop');
    }
    
    start();
    return {stop};
})();