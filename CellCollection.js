var CellCollection = Backbone.Collection.extend({
	initialize: function(models, options) {
		this._table = options._table;
	},
	
	model: CellModel,
	
	getTable: function() {
		return this._table;
	}
});