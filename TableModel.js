var TableModel = Backbone.Model.extend({
	initialize: function(attrs) {
		this._columns = new ColumnCollection(attrs.columns, {_table: this});
		this._rows = new RowCollection(attrs.rows, {_table: this});
	},
	
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
	
	getColumns: function() {
		return this._columns || sentinel;
	},
	
	getRows: function() {
		return this._rows || sentinel;
	}
});