/**
 * AngularJS AidTrackWebApp
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('AidTrackWebApp', [
  // 'ui.router',
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/dashboard.html", controller: "PageCtrl"})
    // campaigns
    .when("/campaigns", {templateUrl: "partials/campaigns.html", controller: "CampaignsCtrl"})
    // Single campaign
    .when("/campaigns/:campId", {templateUrl: "partials/single_campaign.html", controller: "SingleCampaignCtrl"})

    // shipments
    .when("/shipments", {templateUrl: "partials/shipments.html", controller: "ShipmentsCtrl"})
    // Single shipment
    .when("/shipments/:shipmentId", {templateUrl: "partials/single_shipment.html", controller: "SingleShipmentCtrl"})

    // items
    .when("/items", {templateUrl: "partials/items.html", controller: "ItemsCtrl"})
    // Single item
    .when("/items/:itemId", {templateUrl: "partials/single_item.html", controller: "SingleItemCtrl"})

    // API structure page
    .when("/api", {templateUrl: "partials/api.html", controller: "PageCtrl"})
}]);

/**
 * Controls
 */
app.controller('CampaignsCtrl', function ($scope, $location, $http) {
  console.log("Campaigns Controller reporting for duty.");
  $http.get("http://localhost:8887/api/v1/campaigns/").then(function(response) {
    $scope.campaigns = response.data;
    console.log(response.data);
  });
});

app.controller('SingleCampaignCtrl', function ($scope, $location, $http, $routeParams) {
  $http.get("http://localhost:8887/api/v1/campaigns/id/" + $routeParams.campId).then(function(response) {
    $scope.campaigns = response.data;
    console.log(response.data);
  });
});

app.controller('ShipmentsCtrl', function ($scope, $location, $http) {
  $http.get("http://localhost:8887/api/v1/shipments/").then(function(response) {
    $scope.shipments = response.data;
    console.log(response.data);
  });
});

app.controller('SingleShipmentCtrl', function ($scope, $location, $http, $routeParams) {
  $http.get("http://localhost:8887/api/v1/shipments/id/" + $routeParams.shipmentId).then(function(response) {
    $scope.shipments = response.data;
    console.log(response.data);
  });
});

// app.controller('ItemsCtrl', function ($scope, $location, $http) {
//   $http.get("http://localhost:8887/api/v1/items/").then(function(response) {
//     $scope.shipments = response.data;
//     console.log(response.data);
//   });
// });

app.controller('SingleItemCtrl', function ($scope, $location, $http, $routeParams) {
  $http.get("http://localhost:8887/api/v1/items/shipment_id/" + $routeParams.itemId).then(function(response) {
    $scope.items = response.data;
    console.log(response.data);
  });
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");
});