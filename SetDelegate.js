/*
function callSetMethods(options) {
	return function() {
		if (typeof key === 'object') {
			options = val;
	        var attrs = key;
	        
	        
	        if (typeof options !== 'undefined' && _.isArray(options.order)) {
			    _.each(options.order, function(prop) {
					var methodName = setPrefix(key);
				    var method = this[methodName];
				       
					if (method) {
						method.call(this, attrs[prop]);
					}
			    }, this);
		    }
	        
	        for (var attr in attrs) {
		        var methodName = setterMethodName(key);
		        var method = this[methodName];
	        }
	   	} else {
			var methodName = setPrefix(key);
			
			var method = this[methodName];
			if (method) {
				method.call(this, val, options);
			}
			 //= ( || Backbone.Model.prototype.set);
			return method.call(this, key, val, options);
	   	}
	};
}
*/

/*
function SetterDelegate(key, val, options) {
	if (typeof key === 'object') {
		options = val;
        var attrs = key;
        for (var attr in attrs) {
	        var methodName = setterMethodName(key);
	        var method = this[methodName];
	        
	        if (_.isFunction(method)) {
		        
	        }
        }
   	} else {
		var methodName = setPrefix(key);
		var method = (this[methodName] || Backbone.Model.prototype.set);
		return method.call(this, key, val, options);
   	}
}
*/
function setPrefix(key) {
	return "set" + (key[0].toUpperCase() + key.slice(1));
}

function getPrefix(key) {
	return "get" + (key[0].toUpperCase() + key.slice(1));
}

function boxAttrs(key, val) {
	if (_.isString(key)) {
		return ({})[key] = val;
	}
	
	return key;
}

var sentinel = {set: function() {}};