(function() {
    function start() {
        console.log('ZWayConsole module.js start');
    }
    
    function stop() {
        console.log('ZWayConsole module.js stop');
    }
    
    start();
    return {stop:stop};
})();
