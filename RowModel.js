var RowModel = Backbone.Model.extend({
	constructor: function(attrs, options) {
		this.collection = options.collection;
		this._cells = new CellCollection(attrs.cells, {_table: this.getTable()});
		Backbone.Model.call(this, attrs, options);
	},
	
	parse: function(attrs) {
		var attrs = _.clone(attrs);
		
		if (attrs.cells) {
			this.getCells().set(attrs.cells, {parse: true});
			delete attrs.cells;
		}
		
		return attrs;
	},
	
	getCells: function() {
		return this._cells;
	},
	
	getTable: function() {
		return this.collection.getTable();
	}
});