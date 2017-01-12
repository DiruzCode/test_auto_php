angular.module('config', [])
.constant('config', {
	developerMode: true,
	appName: "TEST",
	appVersion: "1.0",
	host : 'http://localhost:',
	port : '8080',
	port_local : '8181',
	api : 'http://localhost:8080/api/v1/',
	client : 'http://localhost:8181/#/'
});
