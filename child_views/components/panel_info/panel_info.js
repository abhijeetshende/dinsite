app.controller('panelInfoController', ['$scope', 'DTOptionsBuilder', function ($scope, DTOptionsBuilder) {

    console.log("panelInfoController init");
    $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(5);

}])
    .directive('diPanelInfo', function () {
        return {
            templateUrl: 'dist/child_views/components/panel_info/panel_info.html',
            controller: "panelInfoController",
            scope: {
                paneldata: '=data'
            },
            link: function (scope, element, attrs, $window) {
                console.log(scope);
        

            }
        };
    });