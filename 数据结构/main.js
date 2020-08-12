var Queue = require('./队列.js');

var q = new Queue();

q.enqueue(2);
q.enqueue(3);

var q1 = new Queue();

console.log(q);
console.log(q1);
