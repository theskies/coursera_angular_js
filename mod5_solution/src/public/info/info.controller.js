(function()
{
'use strict';

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService', 'ApiPath'];

function InfoController(MenuService, ApiPath)
{
  var InfoCtrl = this;
  InfoCtrl.userData = MenuService.getUserData();
  InfoCtrl.apiPath = ApiPath;
  console.log(InfoCtrl.userData);

  InfoCtrl.haveSignedUp = function()
  {
    return MenuService.isFormValid();
  }
}



})();
