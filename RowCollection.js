var RowCollection = Backbone.Collection.extend({
	model: RowModel,
	
	initialize: function(models, options) {
		this._table = options._table;
	},
	
	getTable: function() {
		return this._table;
	}
});