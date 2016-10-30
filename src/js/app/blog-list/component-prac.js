'use strict';

angular.module("blogList").
    component("blogList", {
        template: "<div><h1 class='new-class'></h1><button ng-click='someClickTest()'>ClickMe</button></div>"
        controller: function($scope){
            $scope.title = "Hi there"
            $scope.clicks = 0
            $scope.someClickTest = function(){
            $scope.clicks += 1
            $scope.title = "clicked!!" + $scope.clicks + 'times'
            }
        }
    })