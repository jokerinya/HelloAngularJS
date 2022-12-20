demoApp.directive('isolateScopeWithObject', function () {
    return {
        scope: {
            datasource: '=', // two way binding, it changes all the file customers name
        },
        template:
            '<h1>Name: {{ datasource.name }}, City: {{datasource.city}}</h1>' +
            '<br /> <button ng-click="datasource.name=\'Fred\'">Change</button>',
    };
});
