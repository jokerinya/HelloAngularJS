demoApp.directive('sharedScope', function () {
    return {
        restrict: 'E',
        // Gets this data because it is in the controller's child in HTML
        template: '<h1>{{customer.name}} lives in {{customer.city}}</h1>',
    };
});
