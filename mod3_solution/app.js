(function(){

'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective)
.constant('URL', "https://davids-restaurant.herokuapp.com/menu_items.json");


function foundItemsDirective()
{
  var ddo =
  {
    templateUrl:'displayListItems.html',
    scope:
    {
      found:'<',
      removeItem:'&'
    },
    controller: foundItemsController,
    controllerAs: 'filterDirective',
    bindToController: true
  };

  return ddo;
}


function foundItemsController()
{
  var directiveController = this;

  directiveController.isEmpty = function()
  {
    if(directiveController.found.length == 0)
    {
      return true;
    }

    return false;
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService)
{
  var controller = this;

  controller.found = [];
  controller.searchTerm = "";

  controller.getItems = function()
  {
    if(controller.searchTerm == "")
    {
      MenuSearchService.clearScreen();
    }

    else
    {
        MenuSearchService.getMatchedMenuItems(controller.searchTerm).then(function(result){
          controller.found = result;
        });
        console.log(controller.found);
    }
  }

    controller.removeItem = function(index)
    {
      MenuSearchService.removeItem(index);
    }
}


MenuSearchService.$inject = ['$http','URL'];
function MenuSearchService($http,URL)
{
   var service = this;
   var items = [];

   service.getMatchedMenuItems = function(searchTerm)
   {
      return $http({
        method : "GET",
        url : URL
      }).then(function(result)
    {
      items = [];
      var arr = result.data["menu_items"];
      var resultLength = Number(Object.keys(arr).length);
      for (var i = 0; i < resultLength; i++)
      {
        if(arr[i].description.includes(searchTerm))
        {
           items.push(arr[i]);
        }
      }
      return items;
    });

   };

   service.removeItem = function(index)
   {
     items.splice(index,1);
   }

   service.clearScreen = function()
   {
   	 items.splice(0, items.length);
   }

}



})();
