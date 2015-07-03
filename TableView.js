var TableView = Marionette.LayoutView.extend({
	tagName: "table",
	
	render: function() {
		//Marionette.ItemView.prototype.render.apply(this, arguments);
		
		this.columns = new ColumnCollectionView({
			collection: this.model.getColumns()
		});
		
		this.$el.append( this.columns.render().el );
		
		this.rows = new RowCollectionView({
			collection: this.model.getRows()
		});
		
		this.$el.append( this.rows.render().el );
		
		return this;
	}
});