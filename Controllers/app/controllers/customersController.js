angular.module('customersApp').controller('CustomersController', [
    // Paramnames can be written infront of the function in quotes,
    // .pdfby that, code minifiers don't change them
    '$scope',
    function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = customers = [
            {
                joined: '2000-12-02',
                name: 'John',
                city: 'New York',
                orderTotal: 9.9956,
            },
            {
                joined: '2002-10-01',
                name: 'Tina',
                city: 'Atlanta',
                orderTotal: 10.6,
            },
            {
                joined: '2010-03-20',
                name: 'Max',
                city: 'Chicago',
                orderTotal: 5,
            },
            {
                joined: '2008-07-30',
                name: 'Tony',
                city: 'Chicago',
                orderTotal: 5,
            },
        ];
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    },
]);
