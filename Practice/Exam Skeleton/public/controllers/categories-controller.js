(function () {
    'use strict'

    function CategoriesCtrl($scope, $http, $route, globalConstants) {
        $scope.deleteCategory = function (id) {
            var url = '/categories/remove?id=' + id;
            $http.delete(url, {})
                .then(function (res) {
                    // $route.reload();
                    window.location.reload();
                }, function (err) {
                    console.log(err);
                });
        }
    };

    angular.module('app')
        .controller('CategoriesCtrl', ['$scope', '$http', '$route', 'globalConstants', CategoriesCtrl]);
} ());