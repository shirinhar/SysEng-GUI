var entireTools = [
  {name: "Scalpul", count: "2"},
  {name: "Scissors", count: "0"},
  {name: "adksuhf", count: "3"},
  {name: "help", count: "3"},
];

var app = angular
              .module("tools", [])
              .controller("toolControler", function ($scope) {
                $scope.entireTools = entireTools;
              });

function done(){
  // write something about making sure its done
}
