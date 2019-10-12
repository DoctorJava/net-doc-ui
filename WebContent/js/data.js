 const connections = [{"hasUrlConnection":true,"hasServerSockets":false,"className":"Handler","hasSockets":false,"packageName":"org.springframework.boot.loader.jar"}]; 
 const servlets = [
	 
 ]; 
 const info = {"title":"MyAppName","version":"0.2"}; 
 const sockets = []; 
 const services = [
		{
			"urlPatterns": [
				{
					"config": "Annotation",
					"path": "org.springframework.web.bind.annotation.RestController"
				}
			],
			"type": "JEE_REST",
			"className": "GreetingController",
			"packageName": "hello",
			"methods": [
				{
					"urlPatterns": [
						"[\"/defaultMappingUrl\"]"
					],
					"verb": "class net.jakartaee.tools.netdoc.detectors.SpringServiceDetector$mappingPREFIX",
					"params": null,
					"method": null
				},
				{
					"urlPatterns": [
						"[\"/singleMethodUrl\"]"
					],
					"verb": "GET",
					"params": null,
					"method": null
				},
				{
					"urlPatterns": [
						"[\"/getMappingUrl\"]"
					],
					"verb": "class net.jakartaee.tools.netdoc.detectors.SpringServiceDetector$mappingPREFIX",
					"params": null,
					"method": null
				},
				{
					"urlPatterns": [
						"[\"/multiMethodMappingUrl\"]"
					],
					"verb": "GET",
					"params": null,
					"method": null
				},
				{
					"urlPatterns": [
						"[\"/multiMethodMappingUrl\"]"
					],
					"verb": "POST",
					"params": null,
					"method": null
				},
				{
					"urlPatterns": [
						"[\"multiValueMappingUrl1\", \"multiValueMappingUrl2\"]"
					],
					"verb": "class net.jakartaee.tools.netdoc.detectors.SpringServiceDetector$mappingPREFIX",
					"params": null,
					"method": null
				},
				{
					"urlPatterns": [
						"[\"/multiParamMappingUrl\"]"
					],
					"verb": "class net.jakartaee.tools.netdoc.detectors.SpringServiceDetector$mappingPREFIX",
					"params": null,
					"method": null
				}
			]
		}
	]