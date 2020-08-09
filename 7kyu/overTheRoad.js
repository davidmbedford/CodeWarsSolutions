// Over the Road

// Task
// You've just moved into a perfectly straight street with exactly n 
// identical houses on either side of the road. Naturally, you would like 
// to find out the house number of the people on the other side of the street. 
// The street looks something like this:

// Street
// 1|   |6
// 3|   |4
// 5|   |2
// Evens increase on the right; odds decrease on the left. House numbers start at 1 
// and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Examples", function() {
//   it("(1,3) --> 6", function() {
//     assert.strictEqual(overTheRoad(1,3), 6);
//   });
//   it("(3,3) --> 4", function() {
//     assert.strictEqual(overTheRoad(3,3), 4);
//   });
//   it("2,3) --> 5", function() {
//     assert.strictEqual(overTheRoad(2,3), 5);
//   });
//   it("(3,5) --> 8", function() {
//     assert.strictEqual(overTheRoad(3,5), 8);
//   });
//   it("(7,11) --> 16", function() {
//     assert.strictEqual(overTheRoad(7,11), 16);
//   });
// });

const overTheRoad = (address, n) => {
  return n*2 - (address-1)
}