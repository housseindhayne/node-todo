app.controller('MainController', [
        '$scope', 'books', function($scope, books) {
            $scope.title = 'Books to share';

            // GET =====================================================================
            // when landing on the page, get all todos and show them
            // use the service to get all the todos
            books.get().success(function(data) {
                $scope.products = data;
                for (var i = 0; i < $scope.products.length; i++) {
                    if ($scope.products[i].reserved == 0)
                        $scope.products[i].reserve = "reserve"
                    else
                        $scope.products[i].reserve = "release"
                }

                $scope.loading = false;
            });

            $scope.plusOne = function(index) {
                $scope.products[index].likes += 1;
            };
            $scope.minusOne = function(index) {
                $scope.products[index].dislikes += 1;
            };
            $scope.reserve = function(index) {
                if ($scope.products[index].reserved == 0) {
                    $scope.products[index].reserve = 'release'
                    $scope.products[index].reserved = 1
                } else {
                    $scope.products[index].reserve = 'reserve'
                    $scope.products[index].reserved = 0
                }
            }
        }
]);