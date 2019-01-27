(function()
{
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];

function SignUpController(MenuService)
{
  var SignUpCtrl = this;
  var formValid = false;
  var userData = {};
  var menuNumExists = false;
  var clicked = false;

  SignUpCtrl.validateForm = function(isFormValid)
  {
   clicked = true;
   if(isFormValid == true)
   {
     formValid = true;
     userData.firstName=SignUpCtrl.firstName;
     userData.lastName=SignUpCtrl.lastName;
     userData.emailAddress=SignUpCtrl.emailAddress;
     userData.phoneNumber=SignUpCtrl.phoneNumber;
   }

   else {
     formValid = false;
   }

   MenuService.updateFormValid(formValid);

   MenuService.getFavouriteDish(SignUpCtrl.menuNumber).then(function(response)
   {
     console.log(response.data);
     userData.response=response;
     if(userData.response)
     {menuNumExists = true;}
     else
     {menuNumExists = false;}
   });

   MenuService.saveUserData(userData);

  }

  SignUpCtrl.isFormValid = function()
  {
    return formValid;
  }

  SignUpCtrl.isMenuNumberValid = function()
  {
    console.log(menuNumExists);
    return menuNumExists;
  }

  SignUpCtrl.buttonClicked = function()
  {
    return clicked;
  }


}


})();
