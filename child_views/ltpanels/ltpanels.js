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