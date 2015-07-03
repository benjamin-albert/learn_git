var ColumnCollection = Backbone.Collection.extend({
	model: ColumnModel,
	
	initialize: function(models, options) {
		this._table = options._table;
	},
	
	getTable: function() {
		return this._table;
	}
});