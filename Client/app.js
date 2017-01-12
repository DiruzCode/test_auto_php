/**
* Configure app
*/

angular.module('layout', [
	'ui.router',
	'config'
]);

/**
 * Initialize components
 */


/**
 * Define "app" module and inject all other components and services as dependencies
 */
angular.module('app', [
	'config',
	'layout',
	'ngResource',
	'API',
    'angularMoment'
]).
filter('myDateFormat', function myDateFormat($filter){
  return function(text){
    var  tempdate= new Date(text.replace(/-/g,"/"));
    return $filter('date')(tempdate, "dd-MM-yyyy");
  }
});
