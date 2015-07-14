var CellView = Marionette.ItemView.extend({
	tagName: "td",
	
	modelEvents: {
		"change" : "render",
		"column:chnage:width" : "render"
	},
	
	//events: {
		//"click" : "_handelClick"
	//},
	
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
	
	modelEvents: {
		"select": "hl",
		"deselect": "cl"
	},
	
	events: {
		"click": "_click"
	},
	
	initialize: function(attrs) {
		this.collection = attrs.model.getCells();
	},
	
	hl: function() {
		this.$el.addClass("selected");
	},
	
	cl: function() {
		this.$el.removeClass("selected");
	},
	
	_click: function() {
		alert([this.model.get("id")]);
		this.model.getTable().set({selectedRows: [this.model.get("id")]});
	}
});

var RowCollectionView = Marionette.CollectionView.extend({
	tagName: "tbody",
	
	childView: RowView
});
