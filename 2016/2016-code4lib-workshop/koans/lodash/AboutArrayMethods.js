// _.compact
// _.difference
// _.flatten
// _.flattenDeep
//_.intersection
// _.union
// _.uniq

describe("About Array Methods", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create an array with all falsey values removed", function () {
    // https://lodash.com/docs#compact
    var array = [0, 1, false, 2, '', 3];

    expect(_.compact(array)).toEqual(FILL_ME_IN);
  });

  it("should create an array of unique array values not included in the other provided arrays", function () {
    // https://lodash.com/docs#difference
    var array1 = [1, 2, 3];
    var array2 = [4, 2];

    expect(_.difference(array1, array2)).toEqual(FILL_ME_IN);
  });

  it("should flatten a nested array (1)", function () {
    // https://lodash.com/docs#flatten
    var array = [1, [2, 3, [4]]];

    expect(_.flatten(array)).toEqual(FILL_ME_IN);
  });

  it("should flatten a nested array (2)", function () {
    // https://lodash.com/docs#flatten
    var array = [1, [2, 3, [4]]];

    expect(_.flattenDeep(array)).toEqual(FILL_ME_IN);
  });

  it("create an array of unique values that are included in all of the provided arrays", function () {
    // https://lodash.com/docs#intersection
    var array1 = [1, 2];
    var array2 = [4, 2];
    var array3 = [2, 1];

    expect(_.intersection(array1, array2, array2)).toEqual(FILL_ME_IN);
  });

  it("create an array of unique values, in order, from all of the provided arrays", function () {
    // https://lodash.com/docs#union
    var array1 = [1, 2];
    var array2 = [4, 2];
    var array3 = [2, 1];

    expect(_.union(array1, array2, array2)).toEqual(FILL_ME_IN);
  });

  it("create a duplicate-free version of an array", function () {
    // https://lodash.com/docs#uniq
    var array1 = [2, 1, 2];

    expect(_.uniq(array1)).toEqual(FILL_ME_IN);
  });

  // Move on to AboutObjectMethods.js!
});
