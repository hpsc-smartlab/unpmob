var app = angular.module('myApp', ['ionic']);
   
    
    app.controller('customersController', ['$scope', '$http', function($scope,$http) 
    {
      //$http.get("http://orientamento.uniparthenope.it/index.php/provaws/get/content/articles")
      //$http.get("prova.json")
      $http.get("test.json")
      .success(function (response) 
      {

      	   //$scope.names = response.title;
           $scope.names = response;
           //$scope.names = response[0].title;
           //$scope.names = response[0];
      });
      
    }]);



/*
	app.controller('customersController', ['$scope', '$http', function($scope,$http) 
    {
      //$http.get("Customers_JSON.json")
      $http.get("http://orientamento.uniparthenope.it/index.php/provaws/get/content/articles/2")
      //$http.get("http://orientamento.uniparthenope.it/index.php/provaws/get/content/")
      //$http.get("a.json")
      .map(res => res.json()).subscribe(data => 
      {
        $scope.posts = data.data.title;
    	}); 
      
    }]);

    */