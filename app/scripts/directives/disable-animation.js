'use strict';

/**
 * @ngdoc directive
 * @name comsolid7ReleaseNotesApp.directive:disableAnimation
 * @description
 * # disableAnimation
 */
angular.module('comsolid7ReleaseNotesApp')
    .directive('disableAnimation', ['$animate', function ($animate) {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                $attrs.$observe('disableAnimation', function (value) {
                    $animate.enabled(!value, $element);
                });
            }
        };
    }]);
