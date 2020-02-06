app.controller('landingPageCtrl', ['$scope', 'sidebarService', function ($scope, sidebarService) {
    console.log("landingpage");
    $scope.dgroom_data;
    $scope.ltroom_data;
    sidebarService.getSidebarInfo()
        .then(function (res) {
            $scope.dgroom_data = res.data.H1[0].H2[0].H3[0];
            $scope.ltroom_data = res.data.H1[0].H2[0].H3[1];
            console.log($scope.dgroom_data);
            console.log($scope.ltroom_data);
            updateGraph('dgroom', $scope.dgroom_data);
            updateGraph('ltroom', $scope.ltroom_data);

        });
    function updateGraph(roomname, data) {
        createLabels(roomname, data);
    }
    $scope.graph_data = {
        "dgroom": {
            "label":[],
            "value":[]

        }, "ltroom": {
            "label":[],
            "value":[]
        }
    };
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    function createLabels(roomname, data) {



        data["H4"][0]["H5"].forEach(function (elem) {
            console.log(elem);
            $scope.graph_data[roomname]["label"].push(elem.name);
            $scope.graph_data[roomname]["value"].push(elem.Value);


        });
        console.log($scope.graph_data);
    }
}])