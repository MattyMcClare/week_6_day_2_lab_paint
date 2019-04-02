const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe("Decorator", function(){
    let decorator;
    beforeEach(function(){
      // Arrange
       decorator = new Decorator();
       paintCan1 = new Paint(40);
       paintCan2 = new Paint(24);
       paintCan3 = new Paint(12);
       room1 = new Room(100);

    });
    it("should start with an empty stock", function(){
      actual = decorator.stock;
      assert.deepStrictEqual(actual, []);
    });
    it("should be able to add a can of paint", function(){
      decorator.addPaint(paintCan1);
      actual = decorator.stock.length;
      assert.strictEqual(actual, 1);
    });
    it("should be able to calculate total litres of paint", function(){
      decorator.addPaint(paintCan1);
      decorator.addPaint(paintCan2);
      decorator.addPaint(paintCan3);
      actual = decorator.totalStock();
      assert.strictEqual(actual, 76);
    });
    it("should be able to calculate enough paint for room", function(){
      decorator.addPaint(paintCan1);
      decorator.addPaint(paintCan2);
      decorator.addPaint(paintCan3);
      let roomSize = 50;
      actual = decorator.hasEnough(roomSize);
      assert.strictEqual(actual, true);
    });
    it("should be able to calculate not enough paint for room", function(){
      decorator.addPaint(paintCan1);
      decorator.addPaint(paintCan2);
      decorator.addPaint(paintCan3);
      let roomSize = 90;
      actual = decorator.hasEnough(roomSize);
      assert.strictEqual(actual, false);
    });
    it("should be able paint room if enough paint", function(){
      decorator.addPaint(paintCan1);
      decorator.addPaint(paintCan2);


      actual = decorator.hasEnough(room1.area);
      assert.strictEqual(actual, true);
    });
  });
