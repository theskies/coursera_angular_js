(function(){
'use strict';

angular.module('dataModule')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']

function MenuDataService($http)
{
    var service = this;

    service.getAllCategories = function()
    {
     var end_point = "https://davids-restaurant.herokuapp.com/categories.json";

    return $http({
      method : "GET",
      url : end_point
    }).then(function(response)
    {
      return response.data;
    });

    };

    service.getItemsForCategory = function(categoryShortName)
    {
      var end_point = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
      return $http({
        method : "GET",
        url : end_point
      }).then(function(response)
      {
        return response.data;
      });

    };

}

})();
