// === prerequisite ===
// $ npm install jasmine-core --save-dev
// $ npm install karma karma-jasmine karma-chrome-launcher karma-safari-launcher karma-phantomjs-launcher karma-firefox-launcher --save-dev
// $ npm install bower --save
// === running karma === 
// $ karma start spec/karma.conf.js --single-run --browsers Chrome,Firefox
describe('myController function', function() {

  describe('myController', function() {
    var $scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('MyController', {$scope: $scope});
    }));

    it('should create "spices" model with 3 spices', function() {
      expect($scope.spices.length).toBe(3);
    });

    it('should set the default value of spice', function() {
      expect($scope.spice).toBe('habanero');
    });
  });
});