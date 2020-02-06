app.controller('landingPageCtrl', ['$scope', 'sidebarService', function ($scope, sidebarService) {
    console.log("landingpage");
    $scope.dgroom_data;
    $scope.ltroom_data;
    sidebarService.getSidebarInfo()
        .then(function (res) {
            $scope.dgroom_data = res.data.H1[0].H2[0].H3[0];
            $scope.ltroom_data = res.data.H1[0].H2[0].H3[1];

        });
}])