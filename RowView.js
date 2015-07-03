var CellView = Marionette.ItemView.extend({
	tagName: "td",
	
	modelEvents: {
		"change" : "render",
		"column:chnage:width" : "render"
	},
	
	events: {
		"click" : "_handelClick"
	},
	
	template: Handlebars.compile("{{t}}"),
	
	render: function() {
		Marionette.ItemView.prototype.render.apply(this, arguments);
		
		var width = this.model.getColumn().get("width");
		
		this.$el.css("width", width + "%");
	},
	
	_handelClick: function() {
		this.model.updateColumnTitle();
	}
});


var RowView = Marionette.CollectionView.extend({
	tagName: "tr",
	
	childView: CellView,
		
	initialize: function(attrs) {
		this.collection = attrs.model.getCells();
	}
});

var RowCollectionView = Marionette.CollectionView.extend({
	tagName: "tbody",
	
	childView: RowView
});
