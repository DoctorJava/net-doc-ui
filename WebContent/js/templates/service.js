	// "services": [
	// {
	//     "className": "MultipleAnnotationServlet",
	//     "packageName": "net.jakartaee.tools.sample.services",
	//     "hasWebXml": false,
	//     "urlPatternsWebXml": null,
	//     "urlPatternsAnnotated": "[\"/multiAnnot1\", \"/multiAnnot2\"]",
	//     "methods": [
	//         "GET",
	//         "POST"
	//     ]
	// }

    // "restServices": [
        // {
        //     "urlPatterns": [
        //         {
        //             "config": "Annotation",
        //             "path": "/{a:path1|path2}"
        //         }
        //     ],
        //     "type": "REST",
        //     "className": "MultipleUrlRestService",
        //     "packageName": "net.jakartaee.tools.sample.services",
        //     "methods": [
        //         {
        //             "verb": "GET",
        //             "params": [
                        
        //             ],
        //             "method": "getBooks"
        //         },
        //         {
        //             "verb": "GET",
        //             "params": [
        //                 "id"
        //             ],
        //             "method": "getBookById"
        //         }
        //     ]
        // }
    // ]


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

function serviceTemplate(service) {
    if (service){
		return `
			<li>
				<h2>${service.className}</h2>
				<p><strong>Package: </strong>${service.packageName}</p>
				${showMethods(service.methods)}
				${showPatterns(service.urlPatterns)}
			</li>
			<hr/> 
		`;
	}
}