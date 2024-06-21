#!/usr/bin/node
const Obj = {
  type: 'object',
  value: 12
};
console.log(Obj);
Obj.incr = function () {
  this.value++;
};
Obj.incr();
console.log(Obj);
Obj.incr();
console.log(Obj);
Obj.incr();
console.log(Obj);
