'use strict';

/**
 * @ngdoc overview
 * @name comsolid7ReleaseNotesApp
 * @description
 * # comsolid7ReleaseNotesApp
 *
 * Main module of the application.
 */
angular
    .module('comsolid7ReleaseNotesApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/interface', {
                templateUrl: 'views/interface.html',
                controller: 'PagesCtrl'
            })
            .when('/multimidia', {
                templateUrl: 'views/multimidia.html',
                controller: 'PagesCtrl'
            })
            .when('/jogos', {
                templateUrl: 'views/jogos.html',
                controller: 'JogosCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.showCarousel = function () {
            return ($location.path() === '/');
        };

        $rootScope.encontro = 'COMSOLiD 7';
    }]);
