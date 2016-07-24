var myAppDirect = angular.module('myAppDirect',[]);

myAppDirect.directive('toInsert',function(){
    return {
      templateUrl:'views/insertVehicle.html'
    }

  });

myAppDirect.directive('toView',function(){
    return {
    	templateUrl:'views/viewVehicle.html'

    }
});

myAppDirect.directive('toUpdate',function(){
   return {
   	templateUrl:'views/modifyVehicle.html'
   }
});

myAppDirect.directive('toDelete',function(){
  return {
    templateUrl: 'views/deleteVehicle.html'
  }
});