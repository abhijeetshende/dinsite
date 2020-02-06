app.factory('sidebarService', ['$http', function ($http) {
    console.log(server_url);

    var sidebarSrv = {};
    sidebarSrv.getSidebarInfo = function () {
        return $http.get("/dist/child_views/components/sidebar/sidebar.json");
    }

    return sidebarSrv;
}]); 