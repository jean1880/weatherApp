'use strict';

describe('Filter: weatherFilter', function () {

  // load the filter's module
  beforeEach(module('weatherApp'));

  // initialize a new instance of the filter before each test
  var weatherFilter;
  beforeEach(inject(function ($filter) {
    weatherFilter = $filter('weatherFilter');
  }));

  it('should return the input prefixed with "weatherFilter filter:"', function () {
    var text = 'angularjs';
    expect(weatherFilter(text)).toBe('weatherFilter filter: ' + text);
  });

});
