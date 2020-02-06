app.controller('landingPageCtrl', ['$scope', 'sidebarService', function ($scope, sidebarService) {
    console.log("landingpage");
    $scope.dgroom_data;
    $scope.ltroom_data;

    $scope.dgroom_data_all=[];
    $scope.ltroom_data_all=[];
    sidebarService.getSidebarInfo()
        .then(function (res) {
            $scope.dgroom_data = res.data.H1[0].H2[0].H3[0];
            $scope.ltroom_data = res.data.H1[0].H2[0].H3[1];
            $scope.dgroom_data.H4.forEach(function(e,parentIndex){
                var roomname = e.name;
                e.H5.forEach(function(H5e,childIndex){
                    H5e.roomname = roomname;
                   $scope.dgroom_data_all.push(H5e);
                });
            })

            $scope.ltroom_data.H4.forEach(function(e,parentIndex){
                var roomname = e.name;
                e.H5.forEach(function(H5e,childIndex){
                    H5e.roomname = roomname;
                  
                    $scope.ltroom_data_all.push(H5e);
                });
            })
            updateGraph('dgroom', $scope.dgroom_data_all);
            updateGraph('ltroom', $scope.ltroom_data_all);

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



        data.forEach(function (elem) {
            $scope.graph_data[roomname]["label"].push(elem.roomname +'_'+ elem.name);
            $scope.graph_data[roomname]["value"].push(elem.Value);


        });
        console.log($scope.graph_data);
        
    }
}])