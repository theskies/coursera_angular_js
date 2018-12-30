(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope)
{
 $scope.lunch_items = "";
 $scope.message = "";

 $scope.checkNumItems = function() {
   var arr = $scope.lunch_items.split(",");
   if($scope.lunch_items == "")
   {$scope.message = "Please enter data first";}
   else if(arr.length <= 3)
   {$scope.message = "Enjoy!";}
   else
   {$scope.message = "Too much!";}
 };


}

})();
