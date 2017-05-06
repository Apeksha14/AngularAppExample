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
  console.log("mycontrol");
$scope.sub= function(){
     console.log($scope.this.this.zipcode);
      var data = $scope.this.this.zipcode;
console.log($scope.this.this.zipcode);
var data = $scope.this.this.zipcode;

console.log(data);
//var xheaders = {};
//xheaders["apikey"] = 'a5ycuqrxsukeztxwmxdowwxx';

var xurl = 'http://api.greatschools.org/schools/NC/Charlotte?key=a5ycuqrxsukeztxwmxdowwxx';
var configObj = { method: 'GET',
                  url: xurl 
                  
                };
$http(configObj)
    .then(function onFulfilled(response) {
        console.log(response);
         $scope.items = [];
    for(var i=0;i<response.data.schools.school.length;i++)
    {
      $scope.items[i] =

      {  
        "name":response.data.schools.school[i].name,
        "type":response.data.schools.school[i].type,
        "address" :response.data.schools.school[i].address
        
      }

      
    }
    
    searchResult = $scope.items;
    console.log(searchResult);
    $location.path('/search/');
    

  });
}
   /*$scope.sub= function(){
     console.log($scope.this.this.zipcode);
      var data = $scope.this.this.zipcode;

      console.log(data);
      $http.get("https://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz19821g6hgqz_3s95g&state=NC&city=charlotte&childtype=neighborhood",
            {
    transformResponse: function (cnv) {
      var x2js = new X2JS();
      var aftCnv = x2js.xml_str2json(cnv);
      return aftCnv;
    }
  })
    .success(function (response) {
    $scope.items = [];
    for(var i=0;i<50;i++)
    {
      $scope.items[i] =

      {  "id": response.regionchildren.response.list.region[i].id,
        "name":response.regionchildren.response.list.region[i].name,
        "url":response.regionchildren.response.list.region[i].url,
        "lat":response.regionchildren.response.list.region[i].latitude,
        "long":response.regionchildren.response.list.region[i].longitude
      }

      
    }
    
    searchResult = $scope.items;
    $location.path('/search/');

  });

       /*$http.get("http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz19821g6hgqz_3s95g&state=NC&city=charlotte&childtype=neighborhood")
   }*/
   //}
      
});

app.controller('PageCtrl', function ( $scope, $location, $http ) {
  console.log("Page Controller reporting for duty."); 
  $scope.items = searchResult;  

  $location.path('/');
 // initMap($scope.items);
  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

/*function initMap(searchResult) {
   console.log("searchResult");
   console.log(searchResult);
   var uluru = [];
   for(var i=0; i< searchResult.length;i++)
   {
         uluru[i] = 
        {
          "lat": parseInt(searchResult[i].lat), 
          "lng": parseInt(searchResult[i].long)
        };
        var map = new google.maps.Map(document.getElementById("mapprop"), {
          zoom: 14,
          center: uluru[i]
        });
        var marker = new google.maps.Marker({
          position: uluru[i],
          map: map
        });

      }
}*/

   /*   function initMap(searchResult) {
        var map;
        console.log(JSON.stringify(searchResult));
        map = new google.maps.Map(document.getElementById('mapprop'), {
          zoom: 2,
          center: new google.maps.LatLng(35.340545,-80.779269)
        });

        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');
        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);
        marker(map,searchResult);
      }

      // Loop through the results array and place a marker for each
      // set of coordinates.
      function marker(map,searchResult)
      {
      window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latlongcoords = [searchResult[i].lat,searchResult[i].long];
          console.log(latlongcoords);
          console.log(coords);
          var latLng = new google.maps.LatLng(latlongcoords[1],latlongcoords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }
      }
    }*/
    
    app.controller('login', function($scope,$http,$location) {
  console.log("login");
$scope.login= function(){
   /*  console.log($scope.this.this.zipcode);
      var data = $scope.this.this.zipcode;
console.log($scope.this.this.zipcode);
var data = $scope.this.this.zipcode;*/

}
});