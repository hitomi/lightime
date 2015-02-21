(function(){
  'use strict';
  var app = angular.module("Blog", ['ngAnimate', 'ngSanitize', 'ngRoute', 'hc.marked']);
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/articles', {
      templateUrl: 'views/articles.html',
      controller: 'Articles'
    })
    .otherwise({redirectTo: '/'});
  }]);
  app.run(['$rootScope', '$location', function($rootScope, $location){
    $rootScope.path = $location.path();

    $rootScope.$on('$routeChangeSuccess', function(evt, next, previous) {
      $rootScope.path = $location.path();
    });
  }]);
  app.controller('Articles', ['$http', '$scope', 'marked', function ($http, $scope, marked) {
    $scope.artricles = [{
      "title": "这是某凌在坏掉了的状态下的随笔…",
      "date": "2015/02/21",
      "category": "category",
      "preview": "想要做的事情很多，但是却没有能力去做。<br>所以我留下了很多坑，很多很多坑。<br>因为性格的关系，我又不愿意完全弃掉某个坑，又因为性格的关系，我在不断的挖新坑。<br>雷声大雨点小，有时，甚至连雨都下不下来，这就是现在的我，一事无成的我。<br>而且是，迷失了的我。",
      "link": ""
    }, {
      "title": "这是某凌在坏掉了的状态下的随笔的下文…",
      "date": "2015/02/21",
      "category": "category",
      "preview": "最近现充了一段时间，感触良多。<br>我是一个很懒的人，一直都是，懒得用文字来记录自己的心情。但不知为何，今天却写下了这么多东西。<br>也许，我是真的迷失了吧。<br>好像已经好久没完整的干完一件事了。<br>真的是。<br>每次的计划都没有被成功的执行过，我还真的是一个糟糕的人。<br>糟透了。",
      "link": ""
    }];
  }]);
})();
