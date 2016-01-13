(function () {
    angular.module('app.services', []);
    angular.module('app.controllers', ['app.services']);
    angular.module('app.directives', []);
    angular.module('app.filters', []);
    angular.module('app', ['app.controllers', 'app.directives', 'app.filters', 'ngRoute'])
        .constant('globalConstants', {
            baseUrl: 'http//localhost:3000'
        });
} ());