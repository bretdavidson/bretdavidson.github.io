// _.camelCase
// _.capitalize
// _.escape
// _.trim
// _.trunc
// _.unescape
// _.words

describe("About String Methods", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should convert string to camel case (1)", function () {
    // https://lodash.com/docs#camelCase
    expect(_.camelCase('Foo Bar')).toEqual(FILL_ME_IN);
  });

  it("should convert string to camel case (2)", function () {
    // https://lodash.com/docs#camelCase
    expect(_.camelCase('--foo-bar')).toEqual(FILL_ME_IN);
  });

  it("should convert string to camel case (3)", function () {
    // https://lodash.com/docs#camelCase
    expect(_.camelCase('__foo_bar__')).toEqual(FILL_ME_IN);
  });

  it("should capitalize first character of a string", function () {
    // https://lodash.com/docs#capitalize
    expect(_.capitalize('fred')).toEqual(FILL_ME_IN);
  });

  it("should convert the characters in string to their corresponding HTML entities", function () {
    // https://lodash.com/docs#escape
    expect(_.escape('fred, barney, & pebbles')).toEqual(FILL_ME_IN);
  });

  it("should remove leading and trailing whitespace or specified characters from string (1)", function () {
    // https://lodash.com/docs#trim
    expect(_.trim('  abc  ')).toEqual(FILL_ME_IN);
  });

  it("should remove leading and trailing whitespace or specified characters from string (2)", function () {
    // https://lodash.com/docs#trim
    expect(_.trim('-_-abc-_-', '_-')).toEqual(FILL_ME_IN);
  });

  it("should truncate string if it is longer than the given maximum string length", function () {
    // https://lodash.com/docs#trunc
    expect(_.truncate('hi-diddly-ho there, neighborino')).toEqual(FILL_ME_IN);
  });

  it("should convert the HTML entities in string to their corresponding characters", function () {
    // https://lodash.com/docs#unescape
    expect(_.unescape('fred, barney, &amp; pebbles')).toEqual(FILL_ME_IN);
  });

  it("should split string into an array of its words", function () {
    // https://lodash.com/docs#words
    expect(_.words('fred, barney, & pebbles')).toEqual(FILL_ME_IN);
  });

  // Move on to AboutApplyingWhatWeHaveLearnt.js!
});
