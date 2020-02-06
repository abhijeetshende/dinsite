var app = angular.module("dataInsideApp", ["ui.router","datatables","chart.js"]);
var server_url = "http://localhost:3000";
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'dist/child_views/landing_page/landing_page.html',
            controller: 'landingPageCtrl'
        })

        // DG ROOM STATES AND NESTED VIEWS ========================================
        .state('dgroom', {
            url: '/dgroom',
            templateUrl: 'dist/child_views/dgroom/dgroom.html',
            controller: 'dgroomCtrl'
        })

        .state('ltpanels', {
            url: '/ltpanels',
            templateUrl: 'dist/child_views/ltpanels/ltpanels.html',
            controller: 'ltpanelsCtrl'
        })

});
