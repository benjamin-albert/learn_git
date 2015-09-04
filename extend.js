var extend = function(protoProps) {
	var parent = this;
	
	var child = function() { return parent.apply(this, arguments) };
	
	var Surrogate = function() { this.constructor = child; };
	Surrogate.prototype = parent.prototype;
	child.prototype = new Surrogate;
	
	_.extend(child.prototype, protoProps);
	
	return child;
};

var Foo = function() {
	alert("ABC");
};

_.extend(Foo.prototype, {
	set: function() {
		alert("Bar");
	}
});

console.log(Foo.prototype.set);

Foo.extend = extend;

var Class = {
	define: function(protoProps) {
		var child = function() {};
		child.prototype = protoProps;
		child.extend = function(protoProps) {
			var Proxy = function() {};
			Proxy.prototype = this.prototype;
			return Class.define(_.extend(new Proxy(), protoProps));
		}
		
		return child;
	}
};

var Test = Class.define({
	constructor: function() {
		alert("Construcing a test or test subclass");
	},
	
	met: function() {
		alert(this.abc);
	}
});

var Asdf = Test.extend({
	met: function() {
		this.foo();
		
		Test.prototype.met.apply(this, arguments);
	},
	
	foo: function() {
		alert("I'm a foo!");
	}
});


var tst = new Test();
tst.abc = "This is a tst";
tst.met();

var bla = new Asdf();
bla.abc = "dspfkdsopfksopdfko";
bla.met();

var Qwer = Asdf.extend({
	met: function() {
		Asdf.prototype.met.apply(this, arguments);
		
		alert("Lowdash");
	}
});

var os = new Qwer();
os.abc = "i'm a qwer";
os.met();

var Super = {
	foo: function() {
		this.bar();
	},
	
	bar: function() {
		alert("bar" + this.name);
	}
};

function Person() {
	
}

Person.prototype = Super;

var benjamin = new Person();
benjamin.name = "Benjamin";
benjamin.foo();
