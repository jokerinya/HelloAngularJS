demoApp.directive('isolateScope', function () {
    return {
        restrict: 'E',
        scope: {},
        template: '<h1>{{customer.name}} lives in {{customer.city}}</h1>',
    };
});
