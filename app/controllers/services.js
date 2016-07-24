
var myAppServices = angular.module('myAppServices', ['ngResource']);

myAppServices.factory('serverConnection', ['$resource',
  function($resource){
    return $resource('http://mitchell.dal.jelastic.vps-host.net/vijayrajthota/vehicles/:id', {}, {                                                                                  
     getSingle: {method:'GET', params:{id:'@id'} },
     getAll: {method:'GET', isArray:true},
     postVehicle : {method:'POST'} ,
     updateVehicle : {method : 'PUT'},
     deleteVehicle : {method : 'DELETE', params:{id:'@id'}}
      
    });
  }])