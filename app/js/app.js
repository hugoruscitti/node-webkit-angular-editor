var app = angular.module('App', ['ui.codemirror']);


app.controller('MainCtrl', function($scope){
  $scope.contenido = "function () {return null}";
  
  $scope.codemirrorLoaded = function(_editor){
    $scope.editor = _editor;
  }
  $scope.editorOptions = {
    lineNumbers: true,
    theme: 'eclipse',
    mode: 'javascript',
    onLoad: codemirrorLoaded
  };
});