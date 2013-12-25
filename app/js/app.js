var app = angular.module('App', ['ui.codemirror']);


app.controller('MainCtrl', function($scope){
  $scope.x = "function () {return null}";
  $scope.editorOptions = {
    lineNumbers: true,
    theme: 'monokai',
    mode: 'javascript',
  };
});