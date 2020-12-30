var app = angular.module('developerPortfolio', []);

app.controller('mainCtrl', function($scope, $http, $window) {
  var activeNavLinkId = '';

  var observer = new IntersectionObserver(function(entries) {
    // isIntersecting is true when element and viewport are overlapping
	  // isIntersecting is false when element and viewport don't overlap

    if (entries[0].isIntersecting === true) {
      // console.log('Detected ' + entries[0].target.id);
      if (entries[0].target.id === 'skills') {
        $scope.loadSkillBars();
      }

      if (entries[0].target.id === 'about' || entries[0].target.id === 'skills') {
        $scope.deactivateNavLink();
        $scope.activateNavLink('nav-link-about');
      }
      if (entries[0].target.id === 'projects') {
        $scope.deactivateNavLink();
        $scope.activateNavLink('nav-link-projects');
      }
      if (entries[0].target.id === 'contacts') {
        $scope.deactivateNavLink();
        $scope.activateNavLink('nav-link-contacts');
      }
    }

  }, {threshold: [0]});

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

  $scope.activateNavLink = function(navLinkId) {
    let navLinkElement = document.getElementById(navLinkId);

    angular.element(navLinkElement).addClass('nav-link-active');
    angular.element(navLinkElement.nextElementSibling).addClass('navbar-underline-active');

    activeNavLinkId = navLinkElement.id;
  };

  $scope.deactivateNavLink = function() {
    if (activeNavLinkId !== '') {
      angular.element(document.getElementById(activeNavLinkId)).removeClass('nav-link-active');
      angular.element(document.getElementById(activeNavLinkId).nextElementSibling).removeClass('navbar-underline-active');
    }
  };

  $scope.changeLang = function(lang) {

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
    let skillPercent = {
      'HTML': '75%',
      'CSS': '65%',
      'JavaScript': '65%',
      'Python': '75%',
      'PHP': '45%',
      'SQL': '40%',
      'C#': '25%',
      'Java': '25%',
      'Angular': '65%',
      'Django': '60%',
      'Bootstrap': '40%'
    };

    let skillBarElements = document.querySelectorAll('.prog-bar-int');

    for (let i = 0; i < skillBarElements.length; i++) {
      let width = skillPercent[angular.element(skillBarElements[i]).text()];

      angular.element(skillBarElements[i]).css('width', width);;
    }
  };




  // Excecute Functions Here
  $window.addEventListener("scroll", function () {
    if ($window.pageYOffset === 0) {
      $scope.hideMainContent();
      $scope.deactivateNavLink();
    } else {
      $scope.displayMainContent();
    }
  })

  observer.observe(document.querySelector('#skills'));
  observer.observe(document.querySelector('#about'));
  observer.observe(document.querySelector('#skills'));
  observer.observe(document.querySelector('#projects'));
  observer.observe(document.querySelector('#contacts'));
});
