// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    console.log(this);
    this.on('change', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    });
  },

  //Takes in 'models' as its first argument, which is an array of objects, or just a single object
  add: function(models) {
    this.models.push(models);
  },

  playFirst: function() {
    console.log('played');
    this.models.play();
  }

});