'use strict';

angular.module('comsolid7ReleaseNotesApp')
    .controller('InterfaceCtrl', ['$scope', function ($scope) {
        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        var addSlide = function (image, text) {
            slides.push({
                image: image,
                text: text
            });
        };
        addSlide('img/GNOME3.png', 'GNOME 3');
        addSlide('img/Unity.png', 'Unity');
        addSlide('img/faenza-icon-set.png', 'Coleção de ícones Faenza');
        addSlide('img/nitrux-icon-set.jpg', 'Coleção de ícones Nitrux');
    }]);
