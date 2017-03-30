/**
 * AngularJS AidTrackWebApp
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('AidTrackWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Blog
    .when("/campaigns", {templateUrl: "partials/campaigns.html", controller: "CampaignsCtrl"})
}]);

/**
 * Controls the Blog
 */
app.controller('CampaignsCtrl', function ($scope, $location, $http) {
  console.log("Campaigns Controller reporting for duty.");

  // $http({
  //   method : "GET",
  //   url : "http://api.aidtrack.donchev.net/index.php/api/campaigns/get_campaigns/"
  // }).then(function mySucces(response) {
  //   $scope.myCampaigns = response.data;
  // }, function myError(response) {
  //   $scope.myCampaigns = response.statusText;
  // });

  $http.get("http://127.0.0.1:8887/index.php/api/v1/campaigns/").then(function(response) {
    $scope.campaigns = response.data;
    console.log(response.data);
  });



});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");
});