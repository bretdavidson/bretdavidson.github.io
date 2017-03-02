describe("About Applying What We Have Learnt", function () {

  it("should filter items with no scores", function () {
    // Create a function named filterNoScores that returns an array
    // of objects that have at least one of ba_score, place_score, OR
    // beer_avg_score
    // Tip: Return _.filter with a callback function to process data
    // Tip: Make beer_data_1.js look like beer_data_2.js. These
    // files are in the lib directory of this project.
    // Tip: if you get stuck, example solutions are inside
    // the koans/lodash/solutions directory of this project
    function filterNoScores (data) {
      // FILL IN FUNCTION
      return FILL_ME_IN;
    }

    expect(filterNoScores(_.cloneDeep(beer_data_1))).toEqual(beer_data_2);
  });

  it("should split latitude and longitude", function () {
    // Create a function named splitLatLong that returns an array
    // of objects with separate properties named lat and long and removes
    // the original property "lat_long"
    // Tip: Return _.map and use _.split, _.toNumber, and _.unset in the callback
    // Tip: Make beer_data_2.js look like beer_data_3.js
    function splitLatLong (data) {
      // FILL IN FUNCTION
      return FILL_ME_IN;
    }

    expect(splitLatLong(_.cloneDeep(beer_data_2))).toEqual(beer_data_3);
  });

  it("should capitalize the city value", function () {
    // Create a function named capitalizeCity that returns an array
    // of objects the city property capitalized
    // Tip: Return _.map and use _.capitalize in the callback
    // Tip: Make beer_data_3.js look like beer_data_4.js
    function capitalizeCity (data) {
      // FILL IN FUNCTION
      return  FILL_ME_IN;
    }

    expect(capitalizeCity(_.cloneDeep(beer_data_3))).toEqual(beer_data_4);
  });

  it("removes whitespace from street address", function () {
    // Create a function named trimStreetAddress that returns an array
    // of objects with whitespace removed from the steet_address property
    // Tip: Return _.map and use _.trim in the callback
    // Tip: Make beer_data_4.js look like beer_data_5.js
    function trimStreetAddress (data) {
      // FILL IN FUNCTION
      return FILL_ME_IN;
    }

    expect(trimStreetAddress(_.cloneDeep(beer_data_4))).toEqual(beer_data_5);
  });

  it("should nest all scores into one scores object property", function () {
    // Create a function named nestScores that returns an array
    // of objects with all three beer scores inside of a new object
    // named scores and "unsets" the old properties.
    // Tip: Return _.map and use _.unset in the callback
    // Tip: Make beer_data_5.js look like clean_beer_data.js
    function nestScores (data) {
      // FILL IN FUNCTION
      return FILL_ME_IN;
    }

    expect(nestScores(_.cloneDeep(beer_data_5))).toEqual(clean_beer_data);
  });

  it("should remove falsely values and return unique", function () {
    // Complete this exercise to show a surprise on the test runner page!
    // Tip: Try using chaining! https://lodash.com/docs#_
    // Tip: Use _.compact and _.uniq
    // Tip: Operate on the variable clean_beer_data
    // Tip: if you get stuck, example solutions are inside
    // the koans/lodash/solutions directory of this project
    var ary = [false, 0, 0, true, true];
    var final = FILL_ME_IN;

    expect(final).toEqual([true]);
    if (_.isEqual(final, [true])) {
      drawMap();
    }
  });

  it("should return an array of the top 5 objects by BA score", function () {
    // Try using chaining! https://lodash.com/docs#_
    // Tip: Use _.sortBy, _.reverse, _.take, and _.value
    // Tip: Operate on the variable clean_beer_data
    var top5 = FILL_ME_IN;
    expect(top5).toEqual(top_5_by_ba_score);
  });

  it("should calculate the number of breweries", function () {
    // Try using chaining! https://lodash.com/docs#_
    // Tip: _.filter and _.size
    // Tip: Operate on the variable clean_beer_data
    var number_of_breweries = FILL_ME_IN;
    expect(number_of_breweries).toEqual(9);
  });

  it("should calculate the avg BA score", function () {
    // Try using chaining! https://lodash.com/docs#_
    // Tip: _.map and _.mean
    // Tip: Operate on the variable clean_beer_data
    var average_ba_score = FILL_ME_IN;
    expect(average_ba_score).toEqual(76.66037735849056);
  });

  it("should find the most common zipcode", function () {
    // Try using chaining! https://lodash.com/docs#_
    // Tip: _.map, _.countBy, _.toPairs, _.sortBy (use our sorting function),
    // _.take, _.fromPairs, _.keys, and _.first!!! Whew!
    // Tip: Operate on the variable clean_beer_data
    function sortPairs (p) {
	     return -p[1];
     }

     var most_common_zip = FILL_ME_IN;
     expect(most_common_zip).toEqual("19147");
  });

  // Congratulations! You made it to then end!
});
