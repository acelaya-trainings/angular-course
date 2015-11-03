AngularDynamicRouting
=====================
Dynamic routing is 1 route, many views. It adapts to the pages that are available within your application. Did doesn't need config changes when new HTML partials are added.

# Routing in AngularJS
##*1 route, 1 view*
*Go to http://angularjs.org for more information*

Routing is a way of controlling 'deep-linking' and specifying which controllers and views (HTML partials) AngularJS should execute and serve to the page. AngularJS automatically watches `$location.url()` and tries to map the path to an existing route definition.

You can define routes through the `$routeProvider` API like this:

    angular.module('project', ['mongolab']).
      config(function($routeProvider) {
        $routeProvider.
          when('/', {controller:ListCtrl, templateUrl:'list.html'}).
          when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
          when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
          otherwise({redirectTo:'/'});
      });

The `$route` service is typically used in conjunction with the `ngView` directive and the `$routeParams` service. Simply add the `ng-view` boolean attribute to the HTML element that you wish to use to populate with your partial HTML file contents.

In the above example if the URL changes to `domain.com/#/new` then Angular picks up this change, matches the URL fragment with the condtion and inserts the contents of `detail.html` into the element with the `ng-view` attribute, and executes the code in `CreateCtrl` controller function.

*Download a copy of https://github.com/angular/angular-seed (which this project is based on) to see standard routing in action.*

# Dynamic Routing
##*1 route, many views*
Routing is great, although slight overhead with it is when you add new parital views, you have to add code to the route config. 

**But wouldn't it be nice to add pages and never have to touch the route config again?!**

### Config
First we have to specify a generic route:

    $routeProvider.when('/:name', { templateUrl: 'partials/blank.html', controller: PagesController });
    
- The `name` parameter is stored as a route parameter.
- The `templateUrl` points to a blank file.
- The `controller` is set to PagesController.

Now when the URL changes and we get `domain.com/#/new` the PageController will execute.

### Controller
    function PagesController($scope, $http, $route, $routeParams, $compile) {
      $route.current.templateUrl = 'partials/' + $routeParams.name + ".html";
    
      $http.get($route.current.templateUrl).then(function (msg) {
        $('#views').html($compile(msg.data)($scope));
      });
    }
    PagesController.$inject = ['$scope', '$http', '$route', '$routeParams', '$compile'];

Right, what's going on in here?
- Firstly the current template URL is set to a custom value based on the stored route parameter ("new" in our example).
- Then using the templateUrl value we `$http.get()` the contents of the HTML file.
- The HTML might include some `{{bindings}}` and Angular-esq code that needs "compiling" by Angular, so that's exactly what we do. `$compile(msg.data)($scope)` runs Angular over the new HTML.
- The last part is to insert the new HTML into the `ng-views` element. We've added an ID of "views" to the element to make selecting it easier.

### Hey presto!
At this point the PagesController will have updated the page by inserting the contents of `partials/new.html`. Wicked!

# Play
Download this project (which is based on https://github.com/angular/angular-seed), get it up and running and then try adding new pages to the partials directory. Hopefully with any luck you won't need to touch the route config to see your newly added page.

# Support or Contact
Found a problem? Submit an issue.

Having trouble with Github? Contact support@github.com.