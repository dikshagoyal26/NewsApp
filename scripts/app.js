const app = angular.module("newsApp", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html"
    })
    .when("/feeds/:countryId", {
      templateUrl: "views/feed.html"
    })
    .otherwise({ redirectTo: "/" });
});
