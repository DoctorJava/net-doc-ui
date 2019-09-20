    // "connections": [
    //     {
    //         "hasUrlConnection": true,
    //         "hasServerSockets": false,
    //         "className": "SampleUrlConnection",
    //         "hasSockets": false,
    //         "packageName": "net.jakartaee.tools.sample.netconnections"
    //     },
    //     {
    //         "hasUrlConnection": true,
    //         "hasServerSockets": true,
    //         "className": "SampleServerSocket",
    //         "hasSockets": true,
    //         "packageName": "net.jakartaee.tools.sample.netconnections"
    //     },
    //     {
    //         "hasUrlConnection": true,
    //         "hasServerSockets": false,
    //         "className": "SampleClientSocket",
    //         "hasSockets": true,
    //         "packageName": "net.jakartaee.tools.sample.netconnections"
    //     }
    // ],


function showMethods(methods){
	if ( !methods ) return ``;
	return `
		<p><strong>Methods: </strong>
				${methods.map(method => ` ${method.verb} ( ${method.params.map(param => `${param} `).join("")} ), `).join("")}		
		</p>
	`;
}

function showPatterns(patterns){
	if ( !patterns ) return ``;
	return `
		<p><strong>URL Patterns: </strong>
			${patterns.map(pattern => ` ${pattern.path} `).join("")}		
		</p>
	`;
}

function connectionTemplate(connection) {
	return `
		<li>
			<h2>${connection.className}</h2>
			<p><strong>Package: </strong>${connection.packageName}</p>
			<p><strong>Types:</strong>
				${connection.hasUrlConnection ?  'UrlConnection, ' : ''}
				${connection.hasSockets ?  'Sockets, ' : ''}
				${connection.hasServerSockets ?  'Server Sockets, ' : ''}
			</p>
		</li>
		<hr/> 
	`;
}