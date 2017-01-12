/**
 * First execution, looks for logged user to use in all modules
 */
angular.module('app').run(['$rootScope', '$state', '$location',
    function($rootScope, $state, $location) {

        $rootScope.$on('$locationChangeSuccess', function(e, newUrl, oldUrl) {
	      // Prevent $urlRouter's default handler from firing
	      e.preventDefault();

	      	if(localStorage.getItem("role") === null){
	                $state.go('login.oauth');
    		}


	    });

	    var contains = function(needle) {
		    // Per spec, the way to identify NaN is that it is not equal to itself
		    var findNaN = needle !== needle;
		    var indexOf;

		    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
		        indexOf = Array.prototype.indexOf;
		    } else {
		        indexOf = function(needle) {
		            var i = -1, index = -1;

		            for(i = 0; i < this.length; i++) {
		                var item = this[i];

		                if((findNaN && item !== item) || item === needle) {
		                    index = i;
		                    break;
		                }
		            }

		            return index;
		        };
		    }

		    return indexOf.call(this, needle) > -1;
		};

    }
]);
