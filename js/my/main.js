    var freeGeekApp = angular.module('freeGeekApp', ['ngRoute']);

    // create the controller and inject Angular's $scope
    freeGeekApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    freeGeekApp.config(function($routeProvider, $locationProvider) {
        $routeProvider

        // route for the home page
            .when('/', {
            templateUrl: 'templates/idx-tmpl.html' //'template/int-tmpl.html',
                // controller: 'mController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'templates/idx-tmpl.html',
            //controller: 'aboutController'
        })

        /*
                // route for the contact page
                .when('/contact', {
                    templateUrl: 'pages/contact.html',
                    controller: 'contactController'
                });*/


      $locationProvider.html5Mode(true);
    });
