(function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function RoutesConfig($stateProvider, $urlRouterProvider)
{
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl:'template/home.template.html'
  })

  .state('categories', {
    url:'/categories',
    templateUrl:'template/categories.template.html',
    controller: 'categoriesController as categoryCtrl',
    resolve:{
      categoriesData:['MenuDataService', function(MenuDataService)
    {
      return MenuDataService.getAllCategories();
    }]
    }
  })

  .state('items', {
    url:'/items/{categoryData}',
    templateUrl:'template/items.template.html',
    controller: 'itemsController as itemCtrl',
    resolve:
    {
      items:['MenuDataService', '$stateParams',function(MenuDataService, $stateParams)
    {
      return MenuDataService.getItemsForCategory($stateParams.categoryData);
    }]
    }

  });

}


})();
