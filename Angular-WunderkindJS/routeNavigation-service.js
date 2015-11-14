/**
 * Created by sadrick on 03.06.15.
 */
angular.module('ppsApp').factory('routeNavigation', function($route, $location) {
    var routes = [];
    angular.forEach($route.routes, function (route, path) {
        if (route.name) {
            routes.push({
                path: path,
                name: route.name
            });
        }
    });
    return {
        routes: routes,
        activeRoute: function (route) {
            return route.path === $location.path();
        }
    };
});