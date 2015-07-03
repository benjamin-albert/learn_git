var ColumnView = Marionette.ItemView.extend({
	tagName: "th",
	
	modelEvents: {
		"change" : "render"
	},
	
	template: Handlebars.compile("{{title}}")
});

var ColumnCollectionView = Marionette.CollectionView.extend({
	tagName: "thead",
	
	childView: ColumnView
});