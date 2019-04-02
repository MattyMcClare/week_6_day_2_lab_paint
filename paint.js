const Paint = function(litres){
  this.litres = litres;
};

Paint.prototype.empty = function(){
  this.litres = 0;
};
Paint.prototype.isEmpty = function(){
  return (this.litres === 0);
}
Paint.prototype.usePaint = function(amount){
  this.litres -= amount;
}

module.exports = Paint;
