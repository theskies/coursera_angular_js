(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getFavouriteDish = function(short_name)
  {
     return $http.get(ApiPath + '/menu_items/' + short_name + '.json');
  }

  service.saveUserData = function(user_data)
  {
    service.userData = user_data;
  }

  service.getUserData = function()
  {
    return service.userData;
  }

  service.updateFormValid = function(isFormValid)
  {
    service.formValid = isFormValid;
  }

  service.isFormValid = function()
  {
    return service.formValid;
  }


}



})();
