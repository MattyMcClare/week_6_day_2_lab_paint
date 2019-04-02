const Decorator = function(){
  this.stock = [];
};
Decorator.prototype.addPaint = function(paintCan){
  this.stock.push(paintCan);
}
Decorator.prototype.totalStock = function(){
  let total = 0;
  for (paint of this.stock) {
    total += paint.litres;
  }
  return total;
}
Decorator.prototype.hasEnough = function(roomSize){
  return (this.totalStock() >= roomSize);
}

module.exports = Decorator;
