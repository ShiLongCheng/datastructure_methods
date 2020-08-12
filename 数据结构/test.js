class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	toString() {
		return '(' + this.x + ',' + this.y + ')';
	}
}

var p1 = new Point(1, 3);

var prototypeV = Object.getPrototypeOf(p1);
console.log(Object.getOwnPropertyNames(p1));

function* gen() {
	yield 'hello';
	yield 'hello';
	return 'ending';
}

var hw = gen();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

function* f() {
	console.log('执行了！');
}

var generator = f();
generator.next();

function* demo() {

  console.log('Hello' + (yield)); // OK
  console.log('Hello' + (yield 123)); // OK
}

let d = demo();
console.log(d.next());
console.log(d.next());
console.log(d.next());