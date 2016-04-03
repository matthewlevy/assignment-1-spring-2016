var mongoose = require('mongoose');

var DeathSchema = new mongoose.Schema({
  _id: String,
  value: Number,
},
{
    collection: 'death_counts'
});

mongoose.model('Death', DeathSchema);