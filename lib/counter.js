var Counter = function() {
  this.total = 0;
};
Counter.prototype.getValue = function(){
  return this.total;
}
Counter.prototype.increment = function() {
  return this.total += 1;
};


module.exports = Counter;
