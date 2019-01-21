(function(){
'use strict';

angular.module('MenuApp')
.controller('itemsController', itemsController);

itemsController.$inject = ['items'];

function itemsController(items)
{
  var itemCtrl = this;
  itemCtrl.items = items;
  console.log(itemCtrl.items);
}



})();
