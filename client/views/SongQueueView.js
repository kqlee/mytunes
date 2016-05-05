// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {

    this.render();
  },

  render: function() {
    this.collection.forEach(function(item) {
      new SongQueueEntryView(item).render();
    });
    return this.$el;
  }

});
