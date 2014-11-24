// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })



    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "app/menu/menu.html",
                controller: 'menuController'
            })
            .state('app.accounts', {
                url: "/accounts",
                views: {
                    'menuContent' :{
                        templateUrl: "app/accounts/accounts.html"
                    }
                },
                controller: 'accountsController'
            })
            .state('app.accountTransactions', {
                url: "/accountTransactions/:accountName",
                views: {
                    'menuContent': {
                        templateUrl: "app/accounts/accountTransactions.html"
                    }
                },
                controller: 'accountTransactionsController'
            })
            .state('app.about', {
                url: "/about",
                views: {
                    'menuContent' :{
                        templateUrl: "app/about/about.html"
                    }
                },
                controller: 'aboutController'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/accounts');
    });
