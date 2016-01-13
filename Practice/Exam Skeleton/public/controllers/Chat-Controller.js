(function () {
    'use strict'
    var socket = io();

    function ChatController($scope, $filter) {
        socket.on('message', function (data) {
            $('.messages-container').append('<div>' +
                '<span>' + data.username + '</span>' +
                '<span> (' + $filter('date')(data.time, 'yyyy-MM-dd HH:mm:ss') + ')</span>' +
                '<p>>' + data.message + '</p>' +
                '</div><hr>');
        });
        $scope.send = function (username) {
            socket.emit('message', {
                message: $scope.msg || '',
                username: $('#username').html()
            });

            $scope.msg = null;
        }
    };

    angular.module('app')
        .controller('ChatController', ['$scope', '$filter', ChatController]);
} ());