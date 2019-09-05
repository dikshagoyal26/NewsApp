app.factory("feedfactory", ($http, $q, API_KEY) => {
  console.log("factory called");
  return {
    data(countryId) {
      console.log(" data called", countryId);

      let defer = $q.defer();
      $http
        .get(
          "https://newsapi.org/v2/top-headlines?country=" +
            countryId +
            "&apiKey=" +
            API_KEY
        )
        .then(
          (data) => {
            defer.resolve(data);
          },
          (err) => {
            defer.reject(error);
          }
        );
      return defer.promise;
    },
    categoryData(countryId, category) {
      let defer = $q.defer();
      console.log("category is", category);
      if (category === "all") {
        $http
          .get(
            "https://newsapi.org/v2/top-headlines?country=" +
              countryId +
              "&apiKey=" +
              API_KEY
          )
          .then(
            (data) => {
              defer.resolve(data);
            },
            (err) => {
              defer.reject(error);
            }
          );
      } else {
        $http
          .get(
            "https://newsapi.org/v2/top-headlines?country=" +
              countryId +
              "&category=" +
              category +
              "&apiKey=" +
              API_KEY
          )
          .then(
            (data) => {
              defer.resolve(data);
            },
            (err) => {
              defer.reject(err);
            }
          );
      }
      console.log("defer.promise", defer.promise);
      return defer.promise;
    }
  };
});
