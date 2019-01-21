(function(){
'use strict';

angular.module('MenuApp')
.controller('categoriesController', categoriesController);

categoriesController.$inject = ['MenuDataService', 'categoriesData'];

function categoriesController(MenuDataService, categoriesData)
{
  var categoriesCtrl = this;
  categoriesCtrl.categoriesData = categoriesData;
  console.log(categoriesCtrl.categoriesData);
}



})();
