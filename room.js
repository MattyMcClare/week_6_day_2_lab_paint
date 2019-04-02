const Room = function(area) {
  this.area =  area;
  this.painted = false;
};

Room.prototype.paint = function(litres) {
  if (litres >= this.area) {
    this.painted = true;
  }
}
module.exports = Room;
