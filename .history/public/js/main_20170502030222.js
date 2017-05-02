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
app.controller('myCtrl', function($rootscope,$scope,$http,$location) {
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
    $rootscope.items = [];
    for(var i=0;i<50;i++)
    {
      $rootscope.items[i] =

      {  "id": response.regionchildren.response.list.region[i].id,
        "name":response.regionchildren.response.list.region[i].name,
        "url":response.regionchildren.response.list.region[i].url
      }

      
    }
    console.log("scope");
    console.log($scope.items);
    $location.path('/search');

  });

       /*$http.get("http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz19821g6hgqz_3s95g&state=NC&city=charlotte&childtype=neighborhood")
   }*/
   }
      
});

app.controller('PageCtrl', function ( $scope, $location, $http ) {
  console.log("Page Controller reporting for duty.");   
  $scope.searchitems = $scope.items;
  console.log($scope.searchitems);
  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});