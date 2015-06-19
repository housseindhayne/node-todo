app.controller('MainController',['$scope','books',function($scope,books){
  $scope.title='Books to share';
    books.success(function(data) {
    $scope.products = data;
  });
  $scope.plusOne = function(index) {
  $scope.products[index].likes += 1;
};
   $scope.minusOne = function(index) {
  $scope.products[index].dislikes += 1;
};
}]);