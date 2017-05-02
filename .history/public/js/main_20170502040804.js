/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/properties", {templateUrl: "partials/properties.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    .when("/search", {templateUrl: "partials/search.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function ($scope, $location, $http ) {
  console.log("Blog Controller reporting for duty.");
  
});

/**
 * Controls all other Pages
 */
var searchResult = [];
app.controller('myCtrl', function($scope,$http,$location) {
  console.log($scope.this.this.zipcode);
   $scope.sub= function(){
     console.log($scope.this.this.zipcode);
      var data = $scope.this.this.zipcode;

      console.log(data);
      $http.get("http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz19821g6hgqz_3s95g&state=NC&city=charlotte&childtype=neighborhood",
            {
    transformResponse: function (cnv) {
      var x2js = new X2JS();
      var aftCnv = x2js.xml_str2json(cnv);
      return aftCnv;
    }
  })
    .success(function (response) {
    
    console.log(response.regionchildren.response.list.region);
    $scope.items = [];
    for(var i=0;i<50;i++)
    {
      $scope.items[i] =

      {  "id": response.regionchildren.response.list.region[i].id,
        "name":response.regionchildren.response.list.region[i].name,
        "url":response.regionchildren.response.list.region[i].url
      }

      
    }
    console.log("scope");
    console.log($scope.items);
    searchResult = $scope.items;
    console.log(searchResult);
    initMap(searchResult);
    $location.path('/search/');

  });

       /*$http.get("http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz19821g6hgqz_3s95g&state=NC&city=charlotte&childtype=neighborhood")
   }*/
   }
      
});

console.log("search results");
console.log(searchResult);

app.controller('PageCtrl', function ( $scope, $location, $http ) {
  console.log("Page Controller reporting for duty."); 
  $scope.items = searchResult;  
  console.log($scope.items);
  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

 function initMap() {
        var uluru = {lat:35.340545, lng: -80.779269};
        var map = new google.maps.Map(document.getElementById('mapprop'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }