angular.module('ngPagination', []).run(['$rootScope', function($rootScope) {

  $rootScope.$paginate = function(options) {

  };

  $rootScope.$hasPagination = function() {
    return !!this.$$pagination;
  };

}]);
