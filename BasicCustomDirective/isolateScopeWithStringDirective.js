demoApp.directive('isolateScopeWithString', function () {
    // One way data binding
    return {
        restrict: 'E',
        scope: {
            name: '@',
            city: '@livingcity', // named props
        },
        template: '<h1>Name: {{ name }}, {{city}}</h1>',
    };
});
