app.controller("feedCtrl", ($scope, $routeParams, feedfactory) => {
  let countryId = $routeParams.countryId;
  let promise = feedfactory.data(countryId);
  promise
    .then(response => {
      $scope.articles = response.data.articles;
    })
    .catch(err => {
      console.log("some error occured", err);
    });
  $scope.categories = [
    "all",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
  ];
  $scope.categorize = category => {
    if ($scope.category == "") {
      $scope.category = "All";
    } else {
      let data = feedfactory.categoryData(countryId, category);
      data
        .then(response => {
          $scope.articles = response.data.articles;
        })
        .catch(err => {
          console.log("some error occured", err);
        });
    }
  };
});
