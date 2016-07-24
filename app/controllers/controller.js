var myAppCtrl = angular.module('myAppCtrl',['ngCookies']);


myAppCtrl.controller('Ctrl1',['$scope','$http','$route', '$location','serverConnection','$cookies','$window',
  function($scope,$http,$route,$location,serverConnection,$cookies,$window){
    
    $scope.displayOption = 1;
    $scope.displayForm = 0;
    $scope.insert = function(){
      $scope.displayOption =0;
    }
    $scope.viewAll = function(){
      $scope.displayOption = 1;
    }

    $scope.modify = function(){
      $scope.displayOption=2;
    }
    $scope.delete = function(){
      $scope.displayOption = 3;
    }


     $scope.insertVehicle= function(vehicle){
      console.log("in function");
      $scope.result = serverConnection.postVehicle({Year:vehicle.year,Make:vehicle.make,Model:vehicle.model});
      $scope.result.$promise.then(function(data) {
          if(data.message=="success"){
            location.reload();          
          }
       });
    }

    $scope.allVehicles = serverConnection.getAll();
    
    $scope.getVehicle=function(vehicleId){
      console.log("in get");
      $scope.result = serverConnection.getSingle({id:vehicleId});
      $scope.result.$promise.then(function(data){
       if(data.id ==vehicleId){
          $scope.id = data.id;
          $scope.year = data.year;
          $scope.make = data.make;
          $scope.model = data.model;
          $scope.displayForm = 1;
        }
        else{
          $window.alert("The record Doesnt Exist");
        }

      });
    }

    $scope.update= function(vehicleDetails){
      $scope.result= serverConnection.updateVehicle({Id:$scope.id,Year:vehicleDetails.year,Make:vehicleDetails.make,Model:vehicleDetails.model});
      $scope.result.$promise.then(function(data) {
          if(data.message=="success"){
            location.reload();          
          }
       });
    }

    $scope.deleteVehicle = function(){
      $scope.result = serverConnection.deleteVehicle({id:$scope.id});
       $scope.result.$promise.then(function(data) {
          if(data.message=="success"){
            location.reload();          
          }
       });

    }


  }]);










