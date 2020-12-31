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

      if (angular.element(entries[0].target).hasClass('checkbox-cover')) {
        $scope.animateCheckbox(entries[0].target);
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

  $scope.animateCheckbox = function(checkBoxElement) {
    angular.element(checkBoxElement).addClass('checkbox-cover-active');
  };

  $scope.displayImageButtons = function(projectId) {
    let imgNextElement = document.getElementById('img-next-' + projectId);
    let imgPreviousElement = document.getElementById('img-previous-' + projectId);

    angular.element(imgNextElement).removeClass('img-button-inactive');
    angular.element(imgPreviousElement).removeClass('img-button-inactive');
  };

  $scope.hideImageButtons = function(projectId) {
    let imageElements = document.querySelectorAll('.img-' + projectId);
    let activeImageElement = '';

    for (let i = 0; i < imageElements.length; i++) {
      if (angular.element(imageElements[i]).hasClass('image-active')) {
        activeImageElement = imageElements[i];
      }
    }

    let activeImageIndex = activeImageElement.id.split('-')[activeImageElement.id.split('-').length - 1];

    if (activeImageIndex == 1) {
      let previousButtonElement = document.getElementById('img-previous-' + projectId);
      angular.element(previousButtonElement).addClass('img-button-inactive');
    } else if (activeImageIndex == imageElements.length) {
      let nextButtonElement = document.getElementById('img-next-' + projectId);
      angular.element(nextButtonElement).addClass('img-button-inactive');
    } else {
      $scope.displayImageButtons(projectId);
    }
  };

  $scope.returnScrollCoordinateX = function(activeImageIndex, totalImages, scrollWidth, direction) {
    if (direction === 'next') {
      return -activeImageIndex * scrollWidth;
    } else {
      return (-activeImageIndex + 2) * scrollWidth;
    }
  };

  $scope.switchImage = function(projectId, direction) {
    let imageElements = document.querySelectorAll('.img-' + projectId);
    let imageContainerElement = document.querySelector('#image-container-' + projectId);
    let scrollWidth = imageContainerElement.offsetWidth;
    let activeImageElement = '';


    for (let i = 0; i < imageElements.length; i++) {
      if (angular.element(imageElements[i]).hasClass('image-active')) {
        activeImageElement = imageElements[i];
      }
    }

    let activeImageIndex = parseInt(activeImageElement.id.split('-')[activeImageElement.id.split('-').length - 1]);
    let scrollCoordinateX = $scope.returnScrollCoordinateX(activeImageIndex, imageElements.length, scrollWidth, direction);



    if (direction === 'next') {
      imageContainerElement.scrollTo({
        top: 0,
        left: scrollCoordinateX,
        behavior: 'smooth',
      });

      if (activeImageIndex != imageElements.length) {
        angular.element(activeImageElement.nextElementSibling).addClass('image-active');
        angular.element(activeImageElement).removeClass('image-active');
      }

    } else {
      imageContainerElement.scrollTo({
        top: 0,
        left: scrollCoordinateX,
        behavior: 'smooth',
      });

      if (activeImageIndex != 1) {
        angular.element(activeImageElement.previousElementSibling).addClass('image-active');
        angular.element(activeImageElement).removeClass('image-active');
      }
    }

    $scope.hideImageButtons(projectId);
  };


  // Execute Functions Here
  $window.addEventListener("scroll", function () {
    if ($window.pageYOffset === 0) {
      $scope.hideMainContent();
      $scope.deactivateNavLink();
    } else {
      $scope.displayMainContent();
    }
  })

  observer.observe(document.querySelector('#skills'));

  let checkboxElements = document.querySelectorAll('.checkbox-cover');
  for (var i = 0; i < checkboxElements.length; i++) {
    observer.observe(checkboxElements[i]);
  };

  observer.observe(document.querySelector('#about'));
  observer.observe(document.querySelector('#skills'));
  observer.observe(document.querySelector('#projects'));
  observer.observe(document.querySelector('#contacts'));

  $scope.hideImageButtons('project1');
  $scope.hideImageButtons('project2');
  $scope.hideImageButtons('project3');
});
