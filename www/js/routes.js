angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('teamPilot', {
    url: '/page1',
    templateUrl: 'templates/teamPilot.html',
    abstract:true
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('home', {
    url: '/page8',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('teamPilot.teamPilot2', {
    url: '/page10',
    views: {
      'tab10': {
        templateUrl: 'templates/teamPilot2.html',
        controller: 'teamPilot2Ctrl'
      }
    }
  })

  .state('teamPilot.uPSBatteryMaintenance', {
    url: '/page12',
    views: {
      'tab10': {
        templateUrl: 'templates/uPSBatteryMaintenance.html',
        controller: 'uPSBatteryMaintenanceCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page7')


});