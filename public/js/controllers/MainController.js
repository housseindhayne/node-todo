app.controller('MainController', [
        '$scope', 'books', function($scope, books) {
            $scope.formData = {};
            $scope.loading = true;
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
            $scope.add = true
            $scope.toggleAdd = function() {
                $scope.add = $scope.add === false ? true : false;
            };

            // CREATE ==================================================================
            // when submitting the add form, send the text to the node API
            $scope.createBook = function() {

                // validate the formData to make sure that something is there
                // if form is empty, nothing will happen
                if ($scope.formData.name != undefined && $scope.formData.owner != undefined && $scope.formData.cover != undefined) {
                    $scope.loading = true;

                    // call the create function from our service (returns a promise object)
                    books.create($scope.formData)

                    // if successful creation, call our get function to get all the new books
                    .success(function(data) {
                        $scope.loading = false;
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.products = data;
                    });
                }

            };

        }
]);