angular.module('customersApp').controller('CustomersController', [
    '$scope',
    // 'customersFactory',
    'customersService',
    'appSettings',
    function ($scope, customersService, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            $scope.customers = customersService.getCustomers();
        }

        init();
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    },
]);
