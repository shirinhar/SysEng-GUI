// var entireT = [
//   {name: "Scalpul", count: "2"},
//   {name: "Scissors", count: "0"},
//   {name: "adksuhf", count: "3"},
//   {name: "help", count: "3"},
// ];

var entireT = [];
addList("Scalpul");
addList("jelp");
addList("Scissors");
addList("Scissors");
removeList("jelp");

// function done(){
//   // write something about making sure its done
// }

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].name === obj) {
            return true;
        }
    }

    return false;
}

function addList(obj){
  if(containsObject(obj, entireT)){
    objIndex = entireT.findIndex((o => o.name == obj));
    entireT[objIndex].count = entireT[objIndex].count + 1;
  }
  else {
    entireT.push({name: obj, count: 1});
  }
}

function removeList(obj) {
  if(containsObject(obj, entireT)){
    objIndex = entireT.findIndex((o => o.name == obj));
    if(entireT[objIndex].count == 0){
      console.log("count is less than zero!");
    }else{
      entireT[objIndex].count = entireT[objIndex].count - 1;
    }

  }
  else {
    console.log("removed object not in list");
  }
}

// function compareList(newToolsList){
//   var i;
//   for (i = 0; i < entireT.length; i++) {
//       if () {
//
//       }else{
//         addList(newToolsList[i])
//       }
//   }
// }

var app = angular
              .module("tools", [])
              .controller("toolControler", function ($scope) {
                $scope.entireTools = entireT;
              });
