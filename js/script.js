var app = angular.module('developerPortfolio', []);

app.controller('mainCtrl', function($scope, $http, $window) {
  var setLang = 'pt';
  var navButtonActive = false;

  var activeNavLinkId = '';
  var openModalId = '';
  var activeImage = {
    'project1': 1,
    'project2': 1,
    'project3': 1
  }

  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var scrollKeys = {32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1};

  var observer = new IntersectionObserver(function(entries) {
    // isIntersecting is true when element and viewport are overlapping
	  // isIntersecting is false when element and viewport don't overlap

    if (entries[0].isIntersecting === true) {
      // console.log('Detected ' + entries[0].target.id);
      if (entries[0].target.id === 'skills') {
        $scope.loadSkillBars();
      }

      if (angular.element(entries[0].target).hasClass('project')) {
        $scope.animateCheckbox(entries[0].target.id);
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


  // Need to fix the way it is detecting elements
  $scope.detectClickedElement = function() {
    let navButtonElement = document.querySelector('#navbarToggle');
    let hrElements = navButtonElement.children;

      if (event.target !== document.querySelector('#nav') || event.target !== document.querySelector('#brandContainer') || event.target !== document.querySelector('#collapsable-nav')) {
        console.log('triggered');
        angular.element(navButtonElement).removeClass('open');
        for (var i = 0; i < hrElements.length; i++) {
          angular.element(hrElements[i]).removeClass('open');
        }

        navButtonActive = false;
        angular.element(document.querySelector('#collapsable-nav')).removeClass('show');
      }else {

      }
  };



  $scope.navButtonActivate = function() {
    let navButtonElement = document.querySelector('#navbarToggle');
    let hrElements = navButtonElement.children;

    if (!navButtonActive) {
      angular.element(navButtonElement).addClass('open');
      for (var i = 0; i < hrElements.length; i++) {
        angular.element(hrElements[i]).addClass('open');
      }

      navButtonActive = true;
      $scope.displayMainContent();
    } else {
      angular.element(navButtonElement).removeClass('open');
      for (var i = 0; i < hrElements.length; i++) {
        angular.element(hrElements[i]).removeClass('open');
      }

      navButtonActive = false;
    }
  };

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

  $scope.getTranslateJson = function(lang) {
    if (lang !== setLang) {
      let fileName = 'translate_' + lang + '.json';

      fetch(fileName).then(response => response.json()).then(data => {
        $scope.changeLang(data, lang);
      });
    }
  };

  $scope.convertJsonToHash = function(jsonText) {
    let hashTable = {};

    for (var i = 0; i < jsonText.length; i++) {
      let key = Object.keys(jsonText[i])[0];
      let value = Object.values(jsonText[i])[0];

      hashTable[key] = value;
    }
    return hashTable;
  };

  $scope.changeLang = function(jsonText, lang) {
    let hashTable = $scope.convertJsonToHash(jsonText);
    let langElements = document.querySelectorAll('.lang');

    for (let i = 0; i < langElements.length; i++) {
      angular.element(langElements[i]).text(hashTable[angular.element(langElements[i]).text()]);
    }

    setLang = lang;
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

  $scope.animateCheckbox = function(projectId) {
    let projectElement = document.getElementById(projectId);
    let checkboxElements = projectElement.querySelectorAll('.checkbox-cover');

    for (var i = 0; i < checkboxElements.length; i++) {
      angular.element(checkboxElements[i]).addClass('checkbox-cover-active');
    };
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

        activeImage[projectId] = activeImageIndex + 1;
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

        activeImage[projectId] = activeImageIndex - 1;
      }
    }

    $scope.hideImageButtons(projectId);
  };

  $scope.preventDefault = function(e) {
    e.preventDefault();
  };

  $scope.preventDefaultForScrollKeys = function(e) {
    if (scrollKeys[e.keyCode]) {
       $scope.preventDefault(e);
       return false;
    }
  };

  $scope.disableScroll = function() {
    console.log('triggered');
    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch(e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


    $window.addEventListener('DOMMouseScroll', $scope.preventDefault, false); // older FF
    $window.addEventListener(wheelEvent, $scope.preventDefault, wheelOpt); // modern desktop
    $window.addEventListener('touchmove', $scope.preventDefault, wheelOpt); // mobile
    $window.addEventListener('keydown', $scope.preventDefaultForScrollKeys, false);
  };

  $scope.enableScroll = function() {
    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
      $window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch(e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


    $window.removeEventListener('DOMMouseScroll', $scope.preventDefault, false); // older FF
    $window.removeEventListener(wheelEvent, $scope.preventDefault, wheelOpt); // modern desktop
    $window.removeEventListener('touchmove', $scope.preventDefault, wheelOpt); // mobile
    $window.removeEventListener('keydown', $scope.preventDefaultForScrollKeys, false);
  };

  $scope.detectPressedKey = function() {
    if (event.key === 'Escape') {
      $scope.closeModal();
    }
  };

  $scope.disableModalEvents = function() {
    document.removeEventListener("keydown", $scope.detectPressedKey);
  };

  $scope.enableModalEvents = function() {
    document.addEventListener("keydown", $scope.detectPressedKey);
  };

  $scope.getImage = function(projectId) {
    let imgElement = document.getElementById(projectId + '-img-' + activeImage[projectId]);
    let newImgHTML = "<img id='image-modal' src=" + imgElement.src + ">"

    document.querySelector('#modal-image-container').innerHTML = newImgHTML;

  };

  $scope.openModal = function(modalId, projectId) {
    $scope.getImage(projectId);

    angular.element(document.getElementById(modalId)).addClass('modal-active');

    $scope.enableModalEvents();
    $scope.disableScroll();

    openModalId = modalId;

  };

  $scope.closeModal = function() {
    angular.element(document.getElementById(openModalId)).removeClass('modal-active');

    $scope.disableModalEvents();
    $scope.enableScroll();
  };

  // Call Functions Here
  document.addEventListener('click', $scope.detectClickedElement);
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

  observer.observe(document.querySelector('#project1'));
  observer.observe(document.querySelector('#project2'));
  observer.observe(document.querySelector('#project3'));
  observer.observe(document.querySelector('#project4'));

  // Add here if projects containing images get added
  $scope.hideImageButtons('project1');
  $scope.hideImageButtons('project2');
  $scope.hideImageButtons('project3');

  // TO DO
  // - Fix Bug when Nav Buttons are not coming active as they should
  // - Try to find a way to animateCheckbox individually by project
  // - Implement setInterval to execute send_email.php weekly
  // - Implement functionality for mobile nav-Menu
  // - Consider implementing image carousel for modal
  // - Add Soft Skills Section
});
