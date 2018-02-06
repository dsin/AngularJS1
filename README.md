# AngularJS1
AngularJS1

# Installation
1) Install npm
  ```
  $ npm install
  ```

1) Install bower
  ```
  $ bower install
  ```

# Running Karma
```
$ karma start spec/karma.conf.js --single-run --browsers Chrome,Firefox
```

# References 
* https://thinkster.io/a-better-way-to-learn-angularjs#introduction
  * https://docs.angularjs.org/guide/concepts
  * http://ruoyusun.com/2013/05/25/things-i-wish-i-were-told-about-angular-js.html
    1) bigger controller using $scope 
    2) manipulate DOM in controller using directive : "put control logic in directive controller, and DOM logic in link function; scope sharing is the glue"
    3) Testing : The only unit test that requires some DOM manipulation is directive.
      Because there is dependency injection, when writing your controller unit tests, you can easily use a mock for one of the dependencies, which makes assertions much easier. 
      A typically way to do this is use a mock when instantiate your controller. Or since Angular.js DI uses last win rule, you can rebind (override) your dependency by registering a fake implementation in the tests.
  * https://docs.angularjs.org/guide/databinding
    Two-way data binding