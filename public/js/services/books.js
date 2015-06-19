app.factory('books', ['$http', function($http) {
  return $http.get('http://localhost:8456/booksData.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);