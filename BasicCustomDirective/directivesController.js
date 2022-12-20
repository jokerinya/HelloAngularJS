demoApp.controller('directivesController', [
    '$scope',
    function ($scope) {
        $scope.customer = {
            id: 1,
            joined: '2000-12-02',
            name: 'John',
            city: 'New York',
            orderTotal: 9.9956,
            orders: [
                {
                    id: 1,
                    product: 'Shoes',
                    total: 9.9956,
                },
            ],
        };
        // helper
        function clone(obj) {
            return JSON.parse(JSON.stringify(obj));
        }

        // will pass to child
        $scope.changeName = function () {
            var copy = clone($scope.customer);
            copy.name = 'Batman';
            $scope.customer = copy;
        };
    },
]);
