  angular.module("API", [])
    .service("$Api", ['$http', 'config',
        function($http, config) {

            this.query = function(params) {
                return $http.post(config.api + 'queryBuilder', params).success(function(data) {
                    return data;
            	}, function(err){
                    return err;
                });
            };

            this.GET = function(url) {
                return $http.get(config.api + url).success(function(data) {
                    return data;
                }, function(err){
                    return err;
                });
            };

            this.PUT = function(url,params) {
                return $http.put(config.api + url, params).success(function(data) {
                    return data;
                }, function(err){
                    return err;
                });
            };

            this.POST = function(url,params) {
                return $http.post(config.api + url, params).success(function(data) {
                    return data;
                }, function(err){
                    return err;
                });
            };

            this.DELETE = function(url,params) {
                return $http.delete(config.api + url, params).success(function(data) {
                    return data;
                }, function(err){
                    return err;
                });
            };
        }
    ]);
