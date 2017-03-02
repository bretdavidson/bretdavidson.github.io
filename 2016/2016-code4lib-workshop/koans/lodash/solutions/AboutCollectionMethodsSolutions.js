// _.forEach
// _.map
// _.reduce
// _.filter
// _.find

describe("About Collection Methods", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should iterate over elements of collection invoking iteratee for each element (1)", function () {
    // https://lodash.com/docs#forEach
    var array = [1, 2, 3, 4];
    var accumulate = 0;

    _.forEach(array, function (n) {
      accumulate += 1;
    });

    expect(accumulate).toEqual(4);
  });

  it("should iterate over elements of collection invoking iteratee for each element (2)", function () {
    // https://lodash.com/docs#forEach
    var obj = {'a': 1, 'b': 2};
    var keys = [];

    _.forEach(obj, function (n, key) {
      keys.push(key);
    });

    expect(keys).toEqual(['a', 'b']);
  });

  it("should create an array of values by running each element in collection through iteratee (1)", function () {
    // https://lodash.com/docs#map

    function timesThree(n) {
      return n * 3;
    }

    var array = [1, 2, 3];
    var map = _.map(array, function (n) {
      return n* 3;
    });

    expect(map).toEqual([3, 6, 9]);
  });

  it("should create an array of values by running each element in collection through iteratee (2)", function () {
    // https://lodash.com/docs#map

    function timesThree(n) {
      return n * 3;
    }

    var array = [1, 2, 3];

    // Another way of writing the same thing as the previous test
    expect(_.map(array, timesThree)).toEqual([3, 6, 9]);
  });

  it("should create an array of values by running each element in collection through iteratee (3)", function () {
    // https://lodash.com/docs#map

    var users = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];

    // callback property shorthand
    expect(_.map(users, 'user')).toEqual(['barney', 'fred']);
  });

  it("should reduce collection to a value", function () {
    // https://lodash.com/docs#reduce
    var value = _.reduce([1, 2], function(total, n) {
      return total + n;
    });

    expect(value).toEqual(3);
  });

  it("should return an array of all elements predicate returns truthy for (1)", function () {
    // https://lodash.com/docs#filter
    var evens = _.filter([4, 5, 6], function(n) {
      return n % 2 === 0;
    });

    expect(evens).toEqual([4, 6]);
  });

  it("should return an array of all elements predicate returns truthy for (2)", function () {
    // https://lodash.com/docs#filter

    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true}
    ];

    var underForty = _.filter(users, function (user) {
      return user.age < 40;
    });

    expect(underForty).toEqual([{ 'user': 'barney',   'age': 36, 'active': true }, { 'user': 'pebbles', 'age': 1, 'active': true}]);
  });

  it("should return an array of all elements predicate returns truthy for (3)", function () {
    // https://lodash.com/docs#filter

    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true}
    ];

    // _.matches callback shorthand
    expect(_.filter(users, {'age':36})).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
  });

  it("should return the FIRST element predicate returns truthy for (1)", function () {
    // https://lodash.com/docs#find
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true}
    ];

    var firstUnderForty = _.find(users, function (user) {
      return user.age < 40;
    });

    expect(firstUnderForty).toEqual({ 'user': 'barney',   'age': 36, 'active': true });
  });

  it("should return the FIRST element predicate returns truthy for (2)", function () {
    // https://lodash.com/docs#find
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true}
    ];

    // _.matches callback shorthand
    expect(_.find(users, {'active': true})).toEqual({ 'user': 'barney', 'age': 36, 'active': true });
  });

  // Move on to AboutArrayMethods.js!
});
