angular.module('customersApp').controller('OrdersController', [
    '$scope',
    '$routeParams',
    'customersFactory',
    // 'customersService',
    function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId; // name from route
        $scope.customer = null;

        // init function for get customers order, like find function in modern JS
        function init() {
            $scope.customer = customersFactory
                .getCustomer(customerId)
                .then(function (response) {
                    $scope.customer = response.data;
                })
                .catch(function (data, status, headers, config) {
                    // handle error
                });
        }

        init();
    },
]);
