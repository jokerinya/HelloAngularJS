angular.module('customersApp').controller('CustomersController', [
    '$scope',
    'customersFactory',
    // 'customersService',
    'appSettings',
    function ($scope, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            $scope.customers = customersFactory
                .getCustomers()
                .then(function (response) {
                    $scope.customers = response.data;
                })
                .catch(function (data, status, headers, config) {
                    // handle error
                });
        }

        init();
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    },
]);
