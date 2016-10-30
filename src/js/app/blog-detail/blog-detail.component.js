'use strict';

angular.module('blogDetail').
    component("blogDetail", {
        templateUrl: "/templates/blog-detail.html",
        controller: function($routeParams, $scope){
            $scope.title = "Blog " + $routeParams.id
        }
    });