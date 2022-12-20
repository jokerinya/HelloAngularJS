demoApp.directive('isolateScopeWithEvent', function () {
    return {
        scope: {
            datasource: '=', // two way binding, it changes all the file customers name
            action: '&', // event binding
        },
        template:
            '<h1>Name: {{ datasource.name }}, City: {{datasource.city}}</h1>' +
            '<br /> <button ng-click="action()">Change Data</button>',
    };
});
