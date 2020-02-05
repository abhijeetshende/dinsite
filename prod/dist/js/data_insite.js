var app = angular.module("dataInsideApp", ["ui.router","datatables"]);
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
app.controller('dgroomCtrl', ['$scope', function ($scope) {
    console.log("dgroomCtrl");
    $scope.gridsterOpts = {
        minRows: 2, // the minimum height of the grid, in rows
        maxRows: 100,
        columns: 6, // the width of the grid, in columns
        colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
        rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
        margins: [10, 10], // the pixel distance between each widget
        defaultSizeX: 2, // the default width of a gridster item, if not specifed
        defaultSizeY: 1, // the default height of a gridster item, if not specified
        mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
        resizable: {
            enabled: true,
            start: function (event, uiWidget, $element) {
            }, // optional callback fired when resize is started,
            resize: function (event, uiWidget, $element) {
            }, // optional callback fired when item is resized,
            stop: function (event, uiWidget, $element) {
            } // optional callback fired when item is finished resizing
        },
        draggable: {
            enabled: true, // whether dragging items is supported
            handle: '.ddd', // optional selector for resize handle
            start: function (event, uiWidget, $element) {
            }, // optional callback fired when drag is started,
            drag: function (event, uiWidget, $element) {
            }, // optional callback fired when item is moved,
            stop: function (event, uiWidget, $element) {
            } // optional callback fired when item is finished dragging
        }
    };
    $scope.panel =  [
        {
            "label": "LT Panel: LT Panel Incomer-1",
            "data": [
        
                {
                    "TagId": 437,
                    "Parameter": "VoltagePhase-RY",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 438,
                    "Parameter": "VoltagePhase-R",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 439,
                    "Parameter": "VoltagePhase-YB",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 440,
                    "Parameter": "VoltagePhase-Y",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 441,
                    "Parameter": "VoltagePhase-BR",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 442,
                    "Parameter": "VoltagePhase-B",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 443,
                    "Parameter": "CurrentPhase-R",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 444,
                    "Parameter": "CurrentPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 445,
                    "Parameter": "CurrentPhase-B",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 446,
                    "Parameter": "ActivePowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 447,
                    "Parameter": "ReactivePowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 448,
                    "Parameter": "ApparentPowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 449,
                    "Parameter": "ActivePowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 450,
                    "Parameter": "ReactivePowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 451,
                    "Parameter": "ApparentPowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 452,
                    "Parameter": "ActivePowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 453,
                    "Parameter": "ReactivePowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 454,
                    "Parameter": "ApparentPowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 455,
                    "Parameter": "PowerFactorPhase-R",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 456,
                    "Parameter": "PowerFactorPhase-Y",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 457,
                    "Parameter": "PowerFactorPhase-B",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 458,
                    "Parameter": "LineFrequencyHz",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 459,
                    "Parameter": "EnergyKWh",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 460,
                    "Parameter": "vTHDPhase-R",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 461,
                    "Parameter": "iTHDPhase-R",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 462,
                    "Parameter": "vTHDPhase-Y",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 463,
                    "Parameter": "iTHDPhase-Y",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 464,
                    "Parameter": "vTHDPhase-B",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 465,
                    "Parameter": "iTHDPhase-B",
                    "Value": 1,
                    "EnggUnit": ""
                }
            ]
        },
        {
            "label": "LT Panel: LT Panel Incomer-1",
            "data": [
        
                {
                    "TagId": 437,
                    "Parameter": "VoltagePhase-RY",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 438,
                    "Parameter": "VoltagePhase-R",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 439,
                    "Parameter": "VoltagePhase-YB",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 440,
                    "Parameter": "VoltagePhase-Y",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 441,
                    "Parameter": "VoltagePhase-BR",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 442,
                    "Parameter": "VoltagePhase-B",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 443,
                    "Parameter": "CurrentPhase-R",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 444,
                    "Parameter": "CurrentPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 445,
                    "Parameter": "CurrentPhase-B",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 446,
                    "Parameter": "ActivePowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 447,
                    "Parameter": "ReactivePowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 448,
                    "Parameter": "ApparentPowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 449,
                    "Parameter": "ActivePowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 450,
                    "Parameter": "ReactivePowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 451,
                    "Parameter": "ApparentPowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 452,
                    "Parameter": "ActivePowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 453,
                    "Parameter": "ReactivePowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 454,
                    "Parameter": "ApparentPowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 455,
                    "Parameter": "PowerFactorPhase-R",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 456,
                    "Parameter": "PowerFactorPhase-Y",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 457,
                    "Parameter": "PowerFactorPhase-B",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 458,
                    "Parameter": "LineFrequencyHz",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 459,
                    "Parameter": "EnergyKWh",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 460,
                    "Parameter": "vTHDPhase-R",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 461,
                    "Parameter": "iTHDPhase-R",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 462,
                    "Parameter": "vTHDPhase-Y",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 463,
                    "Parameter": "iTHDPhase-Y",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 464,
                    "Parameter": "vTHDPhase-B",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 465,
                    "Parameter": "iTHDPhase-B",
                    "Value": 1,
                    "EnggUnit": ""
                }
            ]
        },
        {
            "label": "LT Panel: LT Panel Incomer-1",
            "data": [
        
                {
                    "TagId": 437,
                    "Parameter": "VoltagePhase-RY",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 438,
                    "Parameter": "VoltagePhase-R",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 439,
                    "Parameter": "VoltagePhase-YB",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 440,
                    "Parameter": "VoltagePhase-Y",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 441,
                    "Parameter": "VoltagePhase-BR",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 442,
                    "Parameter": "VoltagePhase-B",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 443,
                    "Parameter": "CurrentPhase-R",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 444,
                    "Parameter": "CurrentPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 445,
                    "Parameter": "CurrentPhase-B",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 446,
                    "Parameter": "ActivePowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 447,
                    "Parameter": "ReactivePowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 448,
                    "Parameter": "ApparentPowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 449,
                    "Parameter": "ActivePowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 450,
                    "Parameter": "ReactivePowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 451,
                    "Parameter": "ApparentPowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 452,
                    "Parameter": "ActivePowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 453,
                    "Parameter": "ReactivePowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 454,
                    "Parameter": "ApparentPowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 455,
                    "Parameter": "PowerFactorPhase-R",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 456,
                    "Parameter": "PowerFactorPhase-Y",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 457,
                    "Parameter": "PowerFactorPhase-B",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 458,
                    "Parameter": "LineFrequencyHz",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 459,
                    "Parameter": "EnergyKWh",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 460,
                    "Parameter": "vTHDPhase-R",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 461,
                    "Parameter": "iTHDPhase-R",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 462,
                    "Parameter": "vTHDPhase-Y",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 463,
                    "Parameter": "iTHDPhase-Y",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 464,
                    "Parameter": "vTHDPhase-B",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 465,
                    "Parameter": "iTHDPhase-B",
                    "Value": 1,
                    "EnggUnit": ""
                }
            ]
        },{
            "label": "LT Panel: LT Panel Incomer-1",
            "data": [
        
                {
                    "TagId": 437,
                    "Parameter": "VoltagePhase-RY",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 438,
                    "Parameter": "VoltagePhase-R",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 439,
                    "Parameter": "VoltagePhase-YB",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 440,
                    "Parameter": "VoltagePhase-Y",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 441,
                    "Parameter": "VoltagePhase-BR",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 442,
                    "Parameter": "VoltagePhase-B",
                    "Value": 1,
                    "EnggUnit": "Volt"
                }, {
                    "TagId": 443,
                    "Parameter": "CurrentPhase-R",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 444,
                    "Parameter": "CurrentPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 445,
                    "Parameter": "CurrentPhase-B",
                    "Value": 1,
                    "EnggUnit": "Amp"
                }, {
                    "TagId": 446,
                    "Parameter": "ActivePowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 447,
                    "Parameter": "ReactivePowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 448,
                    "Parameter": "ApparentPowerPhase-R",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 449,
                    "Parameter": "ActivePowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 450,
                    "Parameter": "ReactivePowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 451,
                    "Parameter": "ApparentPowerPhase-Y",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 452,
                    "Parameter": "ActivePowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Watt"
                }, {
                    "TagId": 453,
                    "Parameter": "ReactivePowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 454,
                    "Parameter": "ApparentPowerPhase-B",
                    "Value": 1,
                    "EnggUnit": "Var"
                }, {
                    "TagId": 455,
                    "Parameter": "PowerFactorPhase-R",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 456,
                    "Parameter": "PowerFactorPhase-Y",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 457,
                    "Parameter": "PowerFactorPhase-B",
                    "Value": 1,
                    "EnggUnit": "PF"
                }, {
                    "TagId": 458,
                    "Parameter": "LineFrequencyHz",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 459,
                    "Parameter": "EnergyKWh",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 460,
                    "Parameter": "vTHDPhase-R",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 461,
                    "Parameter": "iTHDPhase-R",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 462,
                    "Parameter": "vTHDPhase-Y",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 463,
                    "Parameter": "iTHDPhase-Y",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 464,
                    "Parameter": "vTHDPhase-B",
                    "Value": 1,
                    "EnggUnit": ""
                }, {
                    "TagId": 465,
                    "Parameter": "iTHDPhase-B",
                    "Value": 1,
                    "EnggUnit": ""
                }
            ]
        }
      
    ]
}])
app.controller('landingPageCtrl', ['$scope', function ($scope) {
    console.log("landingpage");
    // Set new default font family and font color to mimic Bootstrap's default styling
    

    // Area Chart Example
   var chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    }
    var rand =  function(min, max) {
        var seed = this._seed;
        min = min === undefined ? 0 : min;
        max = max === undefined ? 1 : max;
        this._seed = (seed * 9301 + 49297) % 233280;
        return min + (this._seed / 233280) * (max - min);
    }
   var randomScalingFactor = function() {
		return Math.round(rand(-100, 100));
    };
    
  

    var  config = {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'TAG ID 1',
                backgroundColor: chartColors.red,
                borderColor: chartColors.red,
                data: [
11,22,55,11,66,88,1111
                ],
                fill: false,
            }, {
                label: 'TAG ID 2',
                fill: false,
                backgroundColor: chartColors.blue,
                borderColor: chartColors.blue,
                data: [
                    111,22,55,11,661,88,1111
                ],
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    };
    var ctx = document.getElementById("myAreaChart");

    var myLineChart = new Chart(ctx, config);


$scope.example14model = [];
  $scope.setting1 = {
      scrollableHeight: '200px',
      scrollable: true,
  };
  
      $scope.setting2 = {
      scrollableHeight: '200px',
      scrollable: true,
      enableSearch: false
  };
  
  $scope.example14data = [{
      "label": "Alabama",
          "id": "AL"
  }, {
      "label": "Alaska",
          "id": "AK"
  }, {
      "label": "American Samoa",
          "id": "AS"
  }, {
      "label": "Arizona",
          "id": "AZ"
  }, {
      "label": "Arkansas",
          "id": "AR"
  }, {
      "label": "California",
          "id": "CA"
  }, {
      "label": "Colorado",
          "id": "CO"
  }, {
      "label": "Connecticut",
          "id": "CT"
  }, {
      "label": "Delaware",
          "id": "DE"
  }, {
      "label": "District Of Columbia",
          "id": "DC"
  }, {
      "label": "Florida",
          "id": "FL"
  }, {
      "label": "Georgia",
          "id": "GA"
  }, {
      "label": "Guam",
          "id": "GU"
  }, {
      "label": "Hawaii",
          "id": "HI"
  }, {
      "label": "Idaho",
          "id": "ID"
  }, {
      "label": "Illinois",
          "id": "IL"
  }, {
      "label": "Indiana",
          "id": "IN"
  }, {
      "label": "Iowa",
          "id": "IA"
  }, {
      "label": "Kansas",
          "id": "KS"
  }, {
      "label": "Kentucky",
          "id": "KY"
  }, {
      "label": "Louisiana",
          "id": "LA"
  }, {
      "label": "Maine",
          "id": "ME"
  }, {
      "label": "Marshall Islands",
          "id": "MH"
  }, {
      "label": "Maryland",
          "id": "MD"
  }, {
      "label": "Massachusetts",
          "id": "MA"
  }, {
      "label": "Michigan",
          "id": "MI"
  }, {
      "label": "Minnesota",
          "id": "MN"
  }, {
      "label": "Mississippi",
          "id": "MS"
  }, {
      "label": "Missouri",
          "id": "MO"
  }, {
      "label": "Montana",
          "id": "MT"
  }, {
      "label": "Nebraska",
          "id": "NE"
  }, {
      "label": "Nevada",
          "id": "NV"
  }, {
      "label": "New Hampshire",
          "id": "NH"
  }, {
      "label": "New Jersey",
          "id": "NJ"
  }, {
      "label": "New Mexico",
          "id": "NM"
  }, {
      "label": "New York",
          "id": "NY"
  }, {
      "label": "North Carolina",
          "id": "NC"
  }, {
      "label": "North Dakota",
          "id": "ND"
  }, {
      "label": "Ohio",
          "id": "OH"
  }, {
      "label": "Oklahoma",
          "id": "OK"
  }, {
      "label": "Oregon",
          "id": "OR"
  }, {
      "label": "Palau",
          "id": "PW"
  }, {
      "label": "Pennsylvania",
          "id": "PA"
  }, {
      "label": "Puerto Rico",
          "id": "PR"
  }, {
      "label": "Rhode Island",
          "id": "RI"
  }, {
      "label": "South Carolina",
          "id": "SC"
  }, {
      "label": "South Dakota",
          "id": "SD"
  }, {
      "label": "Tennessee",
          "id": "TN"
  }, {
      "label": "Texas",
          "id": "TX"
  }, {
      "label": "Utah",
          "id": "UT"
  }, {
      "label": "Vermont",
          "id": "VT"
  }, {
      "label": "Virgin Islands",
          "id": "VI"
  }, {
      "label": "Virginia",
          "id": "VA"
  }, {
      "label": "Washington",
          "id": "WA"
  }, {
      "label": "West Virginia",
          "id": "WV"
  }, {
      "label": "Wisconsin",
          "id": "WI"
  }, {
      "label": "Wyoming",
          "id": "WY"
  }];
}])
app.controller('ltpanelsCtrl', ['$scope', function ($scope) {
    console.log("ltpanelsCtrl");
    $scope.panel = [{
        "label": "LT Panel: LT Panel Incomer-1",
        "data": [

            {
                "TagId": 437,
                "Parameter": "VoltagePhase-RY",
                "Value": 1,
                "EnggUnit": "Volt"
            }, {
                "TagId": 438,
                "Parameter": "VoltagePhase-R",
                "Value": 1,
                "EnggUnit": "Volt"
            }, {
                "TagId": 439,
                "Parameter": "VoltagePhase-YB",
                "Value": 1,
                "EnggUnit": "Volt"
            }, {
                "TagId": 440,
                "Parameter": "VoltagePhase-Y",
                "Value": 1,
                "EnggUnit": "Volt"
            }, {
                "TagId": 441,
                "Parameter": "VoltagePhase-BR",
                "Value": 1,
                "EnggUnit": "Volt"
            }, {
                "TagId": 442,
                "Parameter": "VoltagePhase-B",
                "Value": 1,
                "EnggUnit": "Volt"
            }, {
                "TagId": 443,
                "Parameter": "CurrentPhase-R",
                "Value": 1,
                "EnggUnit": "Amp"
            }, {
                "TagId": 444,
                "Parameter": "CurrentPhase-Y",
                "Value": 1,
                "EnggUnit": "Amp"
            }, {
                "TagId": 445,
                "Parameter": "CurrentPhase-B",
                "Value": 1,
                "EnggUnit": "Amp"
            }, {
                "TagId": 446,
                "Parameter": "ActivePowerPhase-R",
                "Value": 1,
                "EnggUnit": "Watt"
            }, {
                "TagId": 447,
                "Parameter": "ReactivePowerPhase-R",
                "Value": 1,
                "EnggUnit": "Var"
            }, {
                "TagId": 448,
                "Parameter": "ApparentPowerPhase-R",
                "Value": 1,
                "EnggUnit": "Var"
            }, {
                "TagId": 449,
                "Parameter": "ActivePowerPhase-Y",
                "Value": 1,
                "EnggUnit": "Watt"
            }, {
                "TagId": 450,
                "Parameter": "ReactivePowerPhase-Y",
                "Value": 1,
                "EnggUnit": "Var"
            }, {
                "TagId": 451,
                "Parameter": "ApparentPowerPhase-Y",
                "Value": 1,
                "EnggUnit": "Var"
            }, {
                "TagId": 452,
                "Parameter": "ActivePowerPhase-B",
                "Value": 1,
                "EnggUnit": "Watt"
            }, {
                "TagId": 453,
                "Parameter": "ReactivePowerPhase-B",
                "Value": 1,
                "EnggUnit": "Var"
            }, {
                "TagId": 454,
                "Parameter": "ApparentPowerPhase-B",
                "Value": 1,
                "EnggUnit": "Var"
            }, {
                "TagId": 455,
                "Parameter": "PowerFactorPhase-R",
                "Value": 1,
                "EnggUnit": "PF"
            }, {
                "TagId": 456,
                "Parameter": "PowerFactorPhase-Y",
                "Value": 1,
                "EnggUnit": "PF"
            }, {
                "TagId": 457,
                "Parameter": "PowerFactorPhase-B",
                "Value": 1,
                "EnggUnit": "PF"
            }, {
                "TagId": 458,
                "Parameter": "LineFrequencyHz",
                "Value": 1,
                "EnggUnit": ""
            }, {
                "TagId": 459,
                "Parameter": "EnergyKWh",
                "Value": 1,
                "EnggUnit": ""
            }, {
                "TagId": 460,
                "Parameter": "vTHDPhase-R",
                "Value": 1,
                "EnggUnit": ""
            }, {
                "TagId": 461,
                "Parameter": "iTHDPhase-R",
                "Value": 1,
                "EnggUnit": ""
            }, {
                "TagId": 462,
                "Parameter": "vTHDPhase-Y",
                "Value": 1,
                "EnggUnit": ""
            }, {
                "TagId": 463,
                "Parameter": "iTHDPhase-Y",
                "Value": 1,
                "EnggUnit": ""
            }, {
                "TagId": 464,
                "Parameter": "vTHDPhase-B",
                "Value": 1,
                "EnggUnit": ""
            }, {
                "TagId": 465,
                "Parameter": "iTHDPhase-B",
                "Value": 1,
                "EnggUnit": ""
            }
        ]
    },
    {
        "label": "LT Panel: Kejetherm Auto Welding Mc",
        "data": [

            {
                "TagId": 1,
                "Value": 1,
                "Parameter": "VoltagePhase-R",
                "EnggUnit": "Volt"
            },
            {
                "TagId": 2,
                "Value": 1,
                "Parameter": "VoltagePhase-Y",
                "EnggUnit": "Volt"
            },
            {
                "TagId": 3,
                "Value": 1,
                "Parameter": "VoltagePhase-B",
                "EnggUnit": "Volt"
            },
            {
                "TagId": 4,
                "Value": 1,
                "Parameter": "CurrentPhase-R",
                "EnggUnit": "Amp"
            },
            {
                "TagId": 5,
                "Value": 1,
                "Parameter": "CurrentPhase-Y",
                "EnggUnit": "Amp"
            },
            {
                "TagId": 6,
                "Value": 1,
                "Parameter": "CurrentPhase-B",
                "EnggUnit": "Amp"
            },
            {
                "TagId": 7,
                "Value": 1,
                "Parameter": "ActivePowerPhase-R",
                "EnggUnit": "kVA"
            },
            {
                "TagId": 8,
                "Value": 1,
                "Parameter": "ActivePowerPhase-Y",
                "EnggUnit": "kVA"
            },
            {
                "TagId": 9,
                "Value": 1,
                "Parameter": "ActivePowerPhase-B",
                "EnggUnit": "kVA"
            },
            {
                "TagId": 10,
                "Value": 1,
                "Parameter": "VoltageAverage",
                "EnggUnit": "Volt"
            },
            {
                "TagId": 11,
                "Value": 1,
                "Parameter": "CurrentAverage",
                "EnggUnit": "Amp"
            },
            {
                "TagId": 12,
                "Value": 1,
                "Parameter": "TotalActivePower",
                "EnggUnit": "KVA"
            },
            {
                "TagId": 13,
                "Value": 1,
                "Parameter": "LineFrequency",
                "EnggUnit": "Hz"
            },
            {
                "TagId": 14,
                "Value": 1,
                "Parameter": "Energy",
                "EnggUnit": "KWh"
            },
            {
                "TagId": 15,
                "Value": 1,
                "Parameter": "Power",
                "EnggUnit": "KW"
            },
            {
                "TagId": 16,
                "Value": 1,
                "Parameter": "PowerFactor",
                "EnggUnit": "PF"
            }
        ]
    },
    {
        "label": "LT Panel: Spare-5",
        "data": [{
                "TagId": 17,
                "Value": 1,
                "Parameter": "VoltagePhase-R",
                "Engg Unit": "Volt"
            },
            {
                "TagId": 18,
                "Value": 1,
                "Parameter": "VoltagePhase-Y",
                "Engg Unit": "Volt"
            },
            {
                "TagId": 19,
                "Value": 1,
                "Parameter": "VoltagePhase-B",
                "Engg Unit": "Volt"
            },
            {
                "TagId": 20,
                "Value": 1,
                "Parameter": "CurrentPhase-R",
                "Engg Unit": "Amp"
            },
            {
                "TagId": 21,
                "Value": 1,
                "Parameter": "CurrentPhase-Y",
                "Engg Unit": "Amp"
            },
            {
                "TagId": 22,
                "Value": 1,
                "Parameter": "CurrentPhase-B",
                "Engg Unit": "Amp"
            },
            {
                "TagId": 23,
                "Value": 1,
                "Parameter": "ActivePowerPhase-R",
                "Engg Unit": "kVA"
            },
            {
                "TagId": 24,
                "Value": 1,
                "Parameter": "ActivePowerPhase-Y",
                "Engg Unit": "kVA"
            },
            {
                "TagId": 25,
                "Value": 1,
                "Parameter": "ActivePowerPhase-B",
                "Engg Unit": "kVA"
            },
            {
                "TagId": 26,
                "Value": 1,
                "Parameter": "VoltageAverage",
                "Engg Unit": "Volt"
            },
            {
                "TagId": 27,
                "Value": 1,
                "Parameter": "CurrentAverage",
                "Engg Unit": "Amp"
            },
            {
                "TagId": 28,
                "Value": 1,
                "Parameter": "TotalActivePower",
                "Engg Unit": "KVA"
            },
            {
                "TagId": 29,
                "Value": 1,
                "Parameter": "LineFrequency",
                "Engg Unit": "Hz"
            },
            {
                "TagId": 30,
                "Value": 1,
                "Parameter": "Energy",
                "Engg Unit": "KWh "
            },
            {
                "TagId": 31,
                "Value": 1,
                "Parameter": "Power",
                "Engg Unit": "KW  "
            },
            {
                "TagId": 32,
                "Value": 1,
                "Parameter": "PowerFactor",
                "Engg Unit": "PF"
            }
        ]

    },
    {
        "label": "LT Panel: Oven-2",
        "data": [{
                "TagId": 65,
                "Parameter": "VoltagePhase-R",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 66,
                "Parameter": "VoltagePhase-Y",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 67,
                "Parameter": "VoltagePhase-B",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 68,
                "Parameter": "CurrentPhase-R",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 69,
                "Parameter": "CurrentPhase-Y",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 70,
                "Parameter": "CurrentPhase-B",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 71,
                "Parameter": "ActivePowerPhase-R",
                "Value": 1,
                "EnggUnit": "kVA"
            },
            {
                "TagId": 72,
                "Parameter": "ActivePowerPhase-Y",
                "Value": 1,
                "EnggUnit": "kVA"
            },
            {
                "TagId": 73,
                "Parameter": "ActivePowerPhase-B",
                "Value": 1,
                "EnggUnit": "kVA"
            },
            {
                "TagId": 74,
                "Parameter": "VoltageAverage",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 75,
                "Parameter": "CurrentAverage",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 76,
                "Parameter": "TotalActivePower",
                "Value": 1,
                "EnggUnit": "KVA"
            },
            {
                "TagId": 77,
                "Parameter": "LineFrequency",
                "Value": 1,
                "EnggUnit": "Hz"
            },
            {
                "TagId": 78,
                "Parameter": "Energy",
                "Value": 1,
                "EnggUnit": "KWh"
            },
            {
                "TagId": 79,
                "Parameter": "Power",
                "Value": 1,
                "EnggUnit": "KW"
            },
            {
                "TagId": 80,
                "Parameter": "PowerFactor",
                "Value": 1,
                "EnggUnit": "PF"
            }
        ]
    },
    {
        "label": "LT Panel: Oven-2",
        "data": [{
                "TagId": 65,
                "Parameter": "VoltagePhase-R",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 66,
                "Parameter": "VoltagePhase-Y",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 67,
                "Parameter": "VoltagePhase-B",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 68,
                "Parameter": "CurrentPhase-R",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 69,
                "Parameter": "CurrentPhase-Y",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 70,
                "Parameter": "CurrentPhase-B",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 71,
                "Parameter": "ActivePowerPhase-R",
                "Value": 1,
                "EnggUnit": "kVA"
            },
            {
                "TagId": 72,
                "Parameter": "ActivePowerPhase-Y",
                "Value": 1,
                "EnggUnit": "kVA"
            },
            {
                "TagId": 73,
                "Parameter": "ActivePowerPhase-B",
                "Value": 1,
                "EnggUnit": "kVA"
            },
            {
                "TagId": 74,
                "Parameter": "VoltageAverage",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 75,
                "Parameter": "CurrentAverage",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 76,
                "Parameter": "TotalActivePower",
                "Value": 1,
                "EnggUnit": "KVA"
            },
            {
                "TagId": 77,
                "Parameter": "LineFrequency",
                "Value": 1,
                "EnggUnit": "Hz"
            },
            {
                "TagId": 78,
                "Parameter": "Energy",
                "Value": 1,
                "EnggUnit": "KWh"
            },
            {
                "TagId": 79,
                "Parameter": "Power",
                "Value": 1,
                "EnggUnit": "KW"
            },
            {
                "TagId": 80,
                "Parameter": "PowerFactor",
                "Value": 1,
                "EnggUnit": "PF"
            }
        ]
    },
    {
        "label": "LT Panel: Hepa & Test Lab",
        "data": [

            {
                "TagId": 81,
                "Parameter": "VoltagePhase-R",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 82,
                "Parameter": "VoltagePhase-Y",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 83,
                "Parameter": "VoltagePhase-B",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 84,
                "Parameter": "CurrentPhase-R",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 85,
                "Parameter": "CurrentPhase-Y",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 86,
                "Parameter": "CurrentPhase-B",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 87,
                "Parameter": "ActivePowerPhase-R",
                "Value": 1,
                "EnggUnit": "kVA"
            },
            {
                "TagId": 88,
                "Parameter": "ActivePowerPhase-Y",
                "Value": 1,
                "EnggUnit": "kVA"
            },
            {
                "TagId": 89,
                "Parameter": "ActivePowerPhase-B",
                "Value": 1,
                "EnggUnit": "kVA"
            },
            {
                "TagId": 90,
                "Parameter": "VoltageAverage",
                "Value": 1,
                "EnggUnit": "Volt"
            },
            {
                "TagId": 91,
                "Parameter": "CurrentAverage",
                "Value": 1,
                "EnggUnit": "Amp"
            },
            {
                "TagId": 92,
                "Parameter": "TotalActivePower",
                "Value": 1,
                "EnggUnit": "KVA"
            },
            {
                "TagId": 93,
                "Parameter": "LineFrequency",
                "Value": 1,
                "EnggUnit": "Hz"
            },
            {
                "TagId": 94,
                "Parameter": "Energy",
                "Value": 1,
                "EnggUnit": "KWh"
            },
            {
                "TagId": 95,
                "Parameter": "Power",
                "Value": 1,
                "EnggUnit": "KW"
            },
            {
                "TagId": 96,
                "Parameter": "PowerFactor",
                "Value": 1,
                "EnggUnit": "PF"
            }
        ]
    }

]
}])
app.factory('sidebarService', ['$http', function ($http) {
    console.log(server_url);

    var sidebarSrv = {};
    sidebarSrv.getSidebarInfo = function () {
        return $http.get(server_url + "/dist/child_views/components/sidebar/sidebar.json");
    }

    return sidebarSrv;
}]); 



app.directive('ngDropdownMultiselect', ['$filter', '$document', '$compile', '$parse',

function ($filter, $document, $compile, $parse) {

    return {
        restrict: 'AE',
        scope: {
            selectedModel: '=',
            options: '=',
            extraSettings: '=',
            events: '=',
            searchFilter: '=?',
            translationTexts: '=',
            groupBy: '@'
        },
        template: function (element, attrs) {
            var checkboxes = attrs.checkboxes ? true : false;
            var groups = attrs.groupBy ? true : false;

            var template = '<div class="multiselect-parent btn-group dropdown-multiselect">';
            template += '<button type="button" class="dropdown-toggle" ng-class="settings.buttonClasses" ng-click="toggleDropdown()">{{getButtonText()}}&nbsp;<span class="caret"></span></button>';
            template += '<ul class="dropdown-menu dropdown-menu-form" ng-style="{display: open ? \'block\' : \'none\', height : settings.scrollable ? settings.scrollableHeight : \'auto\' }" style="overflow: scroll" >';
            template += '<li ng-hide="!settings.showCheckAll || settings.selectionLimit > 0"><a data-ng-click="selectAll()"><span class="glyphicon glyphicon-ok"></span>  {{texts.checkAll}}</a>';
            template += '<li ng-show="settings.showUncheckAll"><a data-ng-click="deselectAll();"><span class="glyphicon glyphicon-remove"></span>   {{texts.uncheckAll}}</a></li>';
            template += '<li ng-hide="(!settings.showCheckAll || settings.selectionLimit > 0) && !settings.showUncheckAll" class="divider"></li>';
            template += '<li ng-show="settings.enableSearch"><div class="dropdown-header"><input type="text" class="form-control" style="width: 100%;" ng-model="searchFilter" placeholder="{{texts.searchPlaceholder}}" /></li>';
            template += '<li ng-show="settings.enableSearch" class="divider"></li>';

            if (groups) {
                template += '<li ng-repeat-start="option in orderedItems | filter: searchFilter" ng-show="getPropertyForObject(option, settings.groupBy) !== getPropertyForObject(orderedItems[$index - 1], settings.groupBy)" role="presentation" class="dropdown-header">{{ getGroupTitle(getPropertyForObject(option, settings.groupBy)) }}</li>';
                template += '<li ng-repeat-end role="presentation">';
            } else {
                template += '<li role="presentation" ng-repeat="option in options | filter: searchFilter">';
            }

            template += '<a role="menuitem" tabindex="-1" ng-click="setSelectedItem(getPropertyForObject(option,settings.idProp))">';

            if (checkboxes) {
                template += '<div class="checkbox"><label><input class="checkboxInput" type="checkbox" ng-click="checkboxClick($event, getPropertyForObject(option,settings.idProp))" ng-checked="isChecked(getPropertyForObject(option,settings.idProp))" /> {{getPropertyForObject(option, settings.displayProp)}}</label></div></a>';
            } else {
                template += '<span data-ng-class="{\'glyphicon glyphicon-ok\': isChecked(getPropertyForObject(option,settings.idProp))}"></span> {{getPropertyForObject(option, settings.displayProp)}}</a>';
            }

            template += '</li>';

            template += '<li class="divider" ng-show="settings.selectionLimit > 1"></li>';
            template += '<li role="presentation" ng-show="settings.selectionLimit > 1"><a role="menuitem">{{selectedModel.length}} {{texts.selectionOf}} {{settings.selectionLimit}} {{texts.selectionCount}}</a></li>';

            template += '</ul>';
            template += '</div>';

            element.html(template);
        },
        link: function ($scope, $element, $attrs) {
            var $dropdownTrigger = $element.children()[0];

            $scope.toggleDropdown = function () {
                $scope.open = !$scope.open;
            };

            $scope.checkboxClick = function ($event, id) {
                $scope.setSelectedItem(id);
                $event.stopImmediatePropagation();
            };

            $scope.externalEvents = {
                onItemSelect: angular.noop,
                onItemDeselect: angular.noop,
                onSelectAll: angular.noop,
                onDeselectAll: angular.noop,
                onInitDone: angular.noop,
                onMaxSelectionReached: angular.noop
            };

            $scope.settings = {
                dynamicTitle: true,
                scrollable: false,
                scrollableHeight: '300px',
                closeOnBlur: true,
                displayProp: 'label',
                idProp: 'id',
                externalIdProp: 'id',
                enableSearch: false,
                selectionLimit: 0,
                showCheckAll: true,
                showUncheckAll: true,
                closeOnSelect: false,
                buttonClasses: 'btn btn-default',
                closeOnDeselect: false,
                groupBy: $attrs.groupBy || undefined,
                groupByTextProvider: null,
                smartButtonMaxItems: 0,
                smartButtonTextConverter: angular.noop
            };

            $scope.texts = {
                checkAll: 'Check All',
                uncheckAll: 'Uncheck All',
                selectionCount: 'checked',
                selectionOf: '/',
                searchPlaceholder: 'Search...',
                buttonDefaultText: 'Select',
                dynamicButtonTextSuffix: 'checked'
            };

            $scope.searchFilter = $scope.searchFilter || '';

            if (angular.isDefined($scope.settings.groupBy)) {
                $scope.$watch('options', function (newValue) {
                    if (angular.isDefined(newValue)) {
                        $scope.orderedItems = $filter('orderBy')(newValue, $scope.settings.groupBy);
                    }
                });
            }

            angular.extend($scope.settings, $scope.extraSettings || []);
            angular.extend($scope.externalEvents, $scope.events || []);
            angular.extend($scope.texts, $scope.translationTexts);

            $scope.singleSelection = $scope.settings.selectionLimit === 1;

            function getFindObj(id) {
                var findObj = {};

                if ($scope.settings.externalIdProp === '') {
                    findObj[$scope.settings.idProp] = id;
                } else {
                    findObj[$scope.settings.externalIdProp] = id;
                }

                return findObj;
            }

            function clearObject(object) {
                for (var prop in object) {
                    delete object[prop];
                }
            }

            if ($scope.singleSelection) {
                if (angular.isArray($scope.selectedModel) && $scope.selectedModel.length === 0) {
                    clearObject($scope.selectedModel);
                }
            }

            if ($scope.settings.closeOnBlur) {
                $document.on('click', function (e) {
                    var target = e.target.parentElement;
                    var parentFound = false;

                    while (angular.isDefined(target) && target !== null && !parentFound) {
                        if (_.contains(target.className.split(' '), 'multiselect-parent') && !parentFound) {
                            if (target === $dropdownTrigger) {
                                parentFound = true;
                            }
                        }
                        target = target.parentElement;
                    }

                    if (!parentFound) {
                        $scope.$apply(function () {
                            $scope.open = false;
                        });
                    }
                });
            }

            $scope.getGroupTitle = function (groupValue) {
                if ($scope.settings.groupByTextProvider !== null) {
                    return $scope.settings.groupByTextProvider(groupValue);
                }

                return groupValue;
            };

            $scope.getButtonText = function () {
                if ($scope.settings.dynamicTitle && ($scope.selectedModel.length > 0 || (angular.isObject($scope.selectedModel) && _.keys($scope.selectedModel).length > 0))) {
                    if ($scope.settings.smartButtonMaxItems > 0) {
                        var itemsText = [];

                        angular.forEach($scope.options, function (optionItem) {
                            if ($scope.isChecked($scope.getPropertyForObject(optionItem, $scope.settings.idProp))) {
                                var displayText = $scope.getPropertyForObject(optionItem, $scope.settings.displayProp);
                                var converterResponse = $scope.settings.smartButtonTextConverter(displayText, optionItem);

                                itemsText.push(converterResponse ? converterResponse : displayText);
                            }
                        });

                        if ($scope.selectedModel.length > $scope.settings.smartButtonMaxItems) {
                            itemsText = itemsText.slice(0, $scope.settings.smartButtonMaxItems);
                            itemsText.push('...');
                        }

                        return itemsText.join(', ');
                    } else {
                        var totalSelected;

                        if ($scope.singleSelection) {
                            totalSelected = ($scope.selectedModel !== null && angular.isDefined($scope.selectedModel[$scope.settings.idProp])) ? 1 : 0;
                        } else {
                            totalSelected = angular.isDefined($scope.selectedModel) ? $scope.selectedModel.length : 0;
                        }

                        if (totalSelected === 0) {
                            return $scope.texts.buttonDefaultText;
                        } else {
                            return totalSelected + ' ' + $scope.texts.dynamicButtonTextSuffix;
                        }
                    }
                } else {
                    return $scope.texts.buttonDefaultText;
                }
            };

            $scope.getPropertyForObject = function (object, property) {
                if (angular.isDefined(object) && object.hasOwnProperty(property)) {
                    return object[property];
                }

                return '';
            };

            $scope.selectAll = function () {
                $scope.deselectAll(false);
                $scope.externalEvents.onSelectAll();

                angular.forEach($scope.options, function (value) {
                    $scope.setSelectedItem(value[$scope.settings.idProp], true);
                });
            };

            $scope.deselectAll = function (sendEvent) {
                sendEvent = sendEvent || true;

                if (sendEvent) {
                    $scope.externalEvents.onDeselectAll();
                }

                if ($scope.singleSelection) {
                    clearObject($scope.selectedModel);
                } else {
                    $scope.selectedModel.splice(0, $scope.selectedModel.length);
                }
            };

            $scope.setSelectedItem = function (id, dontRemove) {
                var findObj = getFindObj(id);
                var finalObj = null;

                if ($scope.settings.externalIdProp === '') {
                    finalObj = _.find($scope.options, findObj);
                } else {
                    finalObj = findObj;
                }

                if ($scope.singleSelection) {
                    clearObject($scope.selectedModel);
                    angular.extend($scope.selectedModel, finalObj);
                    $scope.externalEvents.onItemSelect(finalObj);
                    if ($scope.settings.closeOnSelect) $scope.open = false;

                    return;
                }

                dontRemove = dontRemove || false;

                var exists = _.findIndex($scope.selectedModel, findObj) !== -1;

                if (!dontRemove && exists) {
                    $scope.selectedModel.splice(_.findIndex($scope.selectedModel, findObj), 1);
                    $scope.externalEvents.onItemDeselect(findObj);
                } else if (!exists && ($scope.settings.selectionLimit === 0 || $scope.selectedModel.length < $scope.settings.selectionLimit)) {
                    $scope.selectedModel.push(finalObj);
                    $scope.externalEvents.onItemSelect(finalObj);
                }
                if ($scope.settings.closeOnSelect) $scope.open = false;
            };

            $scope.isChecked = function (id) {
                if ($scope.singleSelection) {
                    return $scope.selectedModel !== null && angular.isDefined($scope.selectedModel[$scope.settings.idProp]) && $scope.selectedModel[$scope.settings.idProp] === getFindObj(id)[$scope.settings.idProp];
                }

                return _.findIndex($scope.selectedModel, getFindObj(id)) !== -1;
            };

            $scope.externalEvents.onInitDone();
        }
    };
}

]);
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
app.controller('sidebarController', ['$scope','sidebarService', function ($scope,sidebarService) {
    
        sidebarService.getSidebarInfo()
        .then(function(res){
            console.log(res.data);
            $scope.sidebarinfo = res.data;
        });
        

}])
    .directive('diSidebar', function () {
        return {
            templateUrl: 'dist/child_views/components/sidebar/sidebar.html',
            controller: "sidebarController",
            link: function (scope, element, attrs,$window) {
                // Toggle the side navigation
                $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
                    $("body").toggleClass("sidebar-toggled");
                    $(".sidebar").toggleClass("toggled");
                    if ($(".sidebar").hasClass("toggled")) {
                        $('.sidebar .collapse').collapse('hide');
                    };
                });

                // Close any open menu accordions when window is resized below 768px
                // $window.resize(function () {
                //     if ($window.width() < 768) {
                //         $('.sidebar .collapse').collapse('hide');
                //     };
                // });

                // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
                $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
                    if ($(window).width() > 768) {
                        var e0 = e.originalEvent,
                            delta = e0.wheelDelta || -e0.detail;
                        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                        e.preventDefault();
                    }
                });
            }
        };
    });
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