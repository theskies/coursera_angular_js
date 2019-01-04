(function(){
'use strict';

var ToBuyList = [
{
  name: "Cookies",
  quantity: 10
},

{
  name:"Milk",
  quantity:5
},

{
  name:"Chocolate",
  quantity:15
},

{
  name:"Cereal",
  quantity:2
},

{
  name:"Sweet",
  quantity:1
}
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
var buyController = this;
buyController.items = ShoppingListCheckOffService.populateToBuyList();
buyController.message = "Everything is bought!";
buyController.removeItem = function (itemIndex){
  ShoppingListCheckOffService.removeItem(itemIndex);
}

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
 var boughtController = this;
 boughtController.items = ShoppingListCheckOffService.getBoughtItems();
 boughtController.message = "Nothing bought yet";

}

function ShoppingListCheckOffService()
{
  var service = this;
  var toBuyList = ToBuyList;
  var boughtList = [];

  service.populateToBuyList = function()
  {
    return toBuyList;
  };

  service.getBoughtItems = function()
  {
    return boughtList;
  };

  service.removeItem = function (index)
  {
    var item = {
      name: toBuyList[index].name,
      quantity: toBuyList[index].quantity
    };
    toBuyList.splice(index,1);
    boughtList.push(item);
  };

  }



})();
