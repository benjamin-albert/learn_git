var CellModel = Backbone.Model.extend({
	initialize: function(attrs) {
		this.listenTo(this.getColumn(), "change:width", this._triggerChange);
	},
	
	_triggerChange: function() {
		this.trigger("column:chnage:width");
	},
	
	getColumn: function() {
		return this.getTable().getColumns().get(this.get("id"));
	},
	
	getTable: function() {
		return this.collection.getTable();
	},
	
	updateColumnTitle: function() {
		this.getColumn().set("title", this.get("t"));
	}
});