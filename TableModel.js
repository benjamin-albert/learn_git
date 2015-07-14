Backbone.Collection.prototype.onEvery = function(ids) {
	var models = [], proto = this.model.prototype, wrapper = {};
	
	_.each(ids, function(id) { models.push(this.get(id)); }, this);
		
	for (var method in proto) {
		(function(method) {
			wrapper[method] = function() {
				var ar = arguments;
				_.each(models, function(model) { 
					model[method].apply(model, ar); 
				});
			};
		}(method));
	}
	
	return wrapper;
};

var TableModel = Backbone.Model.extend({
	constructor: function(attrs, options) {
		this._columns = new ColumnCollection(attrs.columns, {_table: this});
		this._rows = new RowCollection(attrs.rows, {_table: this});
		
		Backbone.Model.apply(this, arguments);
	},
	
	initialize: function(attrs) {
		/*
		this._columns = new ColumnCollection(attrs.columns, {_table: this});
		this._rows = new RowCollection(attrs.rows, {_table: this});
		*/
		this.on("change:selectedRows", this.updateSelection);
	},
	
	/*
	set: function(key, val, options) {
		var attrs = _.extend({}, boxAttrs(key, val));
		
		if (attrs.columns) {
			this.getColumns().set(attrs.columns);
			delete attrs.columns;
		}
		
		if (attrs.rows) {
			this.getRows().set(attrs.rows);
			delete attrs.rows;
		}
		
		Backbone.Model.prototype.set.call(this, attrs, options);
	},
	*/
	
	parse: function(attrs) {
		var attrs = _.clone(attrs);
		
		if (attrs.columns) {
			this.getColumns().set(attrs.columns, {parse: true});
			delete attrs.columns;
		}
		
		if (attrs.rows) {
			this.getRows().set(attrs.rows, {parse: true});
			delete attrs.rows;
		}
		
		return attrs;
	},
	
	updateSelection: function() {
		var rows = this.getRows();
		rows.onEvery( this.previous("selectedRows") ).trigger("deselect");
		rows.onEvery( this.get("selectedRows") ).trigger("select");
	},
	
	getColumns: function() {
		return this._columns;
	},
	
	getRows: function() {
		return this._rows;
	}
});