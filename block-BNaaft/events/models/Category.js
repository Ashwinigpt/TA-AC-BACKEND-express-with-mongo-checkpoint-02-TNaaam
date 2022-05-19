var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema ({
    name: { type: String, require: true},
    eventId: { type: Schema.Types.ObjectId, ref: "Event"},

}, {timestamps: true});

module.exports = mongoose.model('Category', categorySchema);