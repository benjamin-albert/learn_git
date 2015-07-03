var RowModel = Backbone.Model.extend({
	initialize: function(attrs, options) {
		this._cells = new CellCollection(attrs.cells, {_table: this.getTable()});
	},
	
	set: function(key, val, options) {
		var attrs = _.extend({}, boxAttrs(key, val));
		
		if (attrs.cells) {
			this.getCells().set(attrs.cells);
			delete attrs.cells;
		}
		
		Backbone.Model.prototype.set.call(this, attrs, options);
	},
	
	getCells: function() {
		return this._cells || sentinel;
	},
	
	getTable: function() {
		return this.collection.getTable();
	}
});