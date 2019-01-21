(function(){
'use strict';

angular.module('MenuApp')
.component('itemComponent',{
templateUrl: 'template/items.component.html',
bindings:{
 items: '<'
}

});

})();
