(function () {
    angular.module('app.services', []);
    angular.module('app.controllers', ['app.services']);
    angular.module('app.directives', []);
    angular.module('app.filters', []);
    angular.module('app', [])
        .constant('globalConstants', {
            baseUrl: 'http//localhost:3000'
        });
} ());