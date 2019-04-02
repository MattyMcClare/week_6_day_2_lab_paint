const assert = require('assert');
const Room = require('../room.js');

describe("Room", function(){
    let room;
    beforeEach(function(){
      // Arrange
       room = new Room(50);
    });
    it("should have an area", function(){
      const actual = room.area;
      assert.strictEqual(actual, 50);
    });
    it("should start not painted", function(){
      const actual = room.painted;
      assert.strictEqual(actual, false);
    });
    it("should be able to be painted", function(){
      room.paint(50);
      const actual = room.painted;
      assert.strictEqual(actual, true);

    });
    it("should not be painted if insufficient paint", function(){
      room.paint(49);
      const actual = room.painted;
      assert.strictEqual(actual, false);
    });
});
