var app = angular.module('myApp', ['ionic']);
   
   /* 
    app.controller('customersController', ['$scope', '$http', function($scope,$http) 
    {
      //$http.get("Customers_JSON.json")
      $http.get("http://orientamento.uniparthenope.it/index.php/provaws/get/content/articles/2/response.json")
      //$http.get("http://orientamento.uniparthenope.it/index.php/provaws/get/content/")
      //$http.get("a.json")
      .success(function (response) 
      {

      	   $scope.names = response.title;
      });
      
    }]);
*/



	app.controller('customersController', ['$scope', '$http', function($scope,$http) 
    {
      //$http.get("Customers_JSON.json")
      $http.get("http://orientamento.uniparthenope.it/index.php/provaws/get/content/articles/2/response.json")
      //$http.get("http://orientamento.uniparthenope.it/index.php/provaws/get/content/")
      //$http.get("a.json")
      .map(res => res.json()).subscribe(data => 
      {
        this.posts = data.data.children;
    	}); 
      
    }]);