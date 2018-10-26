 /* global zwayconsole, ws, controller */
 
 export const startServer = () => {
    zwayconsole = function(url, request) {
        console.log('ZWayConsole request: ' + url);
        
    // 	var i = this.routes.length;
    //     while( i-- ){
    //       var args = url.match(this.routes[i].pattern);
    //       if( args ){
    //             return this.routes[i].callback(args.slice(1));
    //       }
    //     }
    	
    // 	this.log('request: ' + url +' route not found');
	    return {
            status: 200,
            headers: {
                "Content-Type": 'application/json',
		        "Connection": "keep-alive"
            },
            body: {data: 'data'}
        }
    };
    
    ws.allowExternalAccess("zwayconsole", controller.auth.ROLE.ANONYMOUS); // login required
 }	
 
 export const stopServer = () => {
    ws.revokeExternalAccess("zwayconsole");
    zwayconsole = null;
 }