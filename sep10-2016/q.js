function Queue(){
  this.length = 0;
  this.items = [];
}

Queue.prototype.dequeue = function(){
    var element = this.items.shift();
    this.length = -1;
    
    return element;
};

Queue.prototype.enqueue = function(item){
  this.items.push(item);
  this.length += 1;
};

Queue.prototype.getLength = function(){
  return this.length;
};
Queue.prototype.getFirst = function(){
  if(this.length > 0){
    return this.items[0];
  } else {
    return null;
  }
};

var test1 = new Queue();
test1.enqueue(1);

console.log(test1.getLength() === 1);
test1.enqueue(2);

var item = test1.dequeue();

console.log(item === 1);
