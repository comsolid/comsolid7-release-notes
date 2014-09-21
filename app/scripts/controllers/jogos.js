'use strict';

angular.module('comsolid7ReleaseNotesApp')
    .controller('JogosCtrl', ['$scope', function ($scope) {
        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        var addSlide = function (image, text) {
            slides.push({
                image: image,
                text: text
            });
        };
        addSlide('img/ut.jpg', 'Urban Terror 4.2 HD');
        addSlide('img/fofix.png', 'Frets On Fire');
        addSlide('img/frogatto.png', 'Frogatto');
        addSlide('img/stk.jpg', 'Super Tux Kart');
        addSlide('img/supertux.png', 'Super Tux');
        addSlide('img/mupen64plus.jpg', 'Mupen64 plus');
    }]);
