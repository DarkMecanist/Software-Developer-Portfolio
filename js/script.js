var app = angular.module('developerPortfolio', []);

app.controller('mainCtrl', function($scope, $http, $window) {

  $scope.animateNavButton = function() {
    let hrElements = document.querySelector('#navbarToggle').children;

    for (var i = 0; i < hrElements.length; i++) {
      angular.element(hrElements[i]).addClass('focused');
    }
  };

  $scope.deanimateNavButton = function() {
    let hrElements = document.querySelector('#navbarToggle').children;

    for (var i = 0; i < hrElements.length; i++) {
      angular.element(hrElements[i]).removeClass('focused');
    }
  };

  $scope.displayMainContent = function() {
    let backgroundBoxElement = document.querySelector('#background-box-nav');
    let mainContentElement = document.querySelector('#main-content');

    angular.element(backgroundBoxElement).addClass('inactive-bg-box');
    angular.element(mainContentElement).addClass('active');
  };

  $scope.hideMainContent = function() {
    let backgroundBoxElement = document.querySelector('#background-box-nav');
    let mainContentElement = document.querySelector('#main-content');

    angular.element(backgroundBoxElement).removeClass('inactive-bg-box');
    angular.element(mainContentElement).removeClass('active');
  };

  $scope.loadSkillBars = function() {
    console.log('triggered skill bar function');
  };

  // $scope.displayMainContent();

  // Excecute Functions Here
  $window.addEventListener("scroll", function () {
    if ($window.pageYOffset === 0) {
      $scope.hideMainContent();
    } else {
      $scope.displayMainContent();
    }
  })
});
