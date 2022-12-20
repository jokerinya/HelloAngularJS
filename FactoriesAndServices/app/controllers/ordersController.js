angular.module('customersApp').controller('OrdersController', [
    '$scope',
    '$routeParams',
    // 'customersFactory',
    'customersService',
    function ($scope, $routeParams, customersService) {
        var customerId = $routeParams.customerId; // name from route
        $scope.customer = null;

        // init function for get customers order, like find function in modern JS
        function init() {
            $scope.customer = customersService.getCustomer(customerId);
        }

        init();
    },
]);
