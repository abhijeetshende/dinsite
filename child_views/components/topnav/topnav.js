app.controller('topnavController', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
    console.log("topnav init");
    
  }])
  .directive('diTopnav', function() {
    return {
      templateUrl: 'dist/child_views/components/topnav/topnav.html',
      controller:"topnavController"
    };
  });