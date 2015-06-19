app.factory('books', ['$http', function($http) {
  return $http.get('/booksData.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);