var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema ({
    title: { type: String, require: true},
    summary: { type: String, require: true},
    host: { type: String, require: true},
    start_date: { type: Date },
    end_date: { type: Date },
    event_category: [{ type: String }],
    event_category_Id: [{ type: Schema.Types.ObjectId, ref: "Category"}],
    location: String,
    likes: { type: Number, default: 0},
    remarks: [{ type: Schema.Types.ObjectId, ref: "Remark"}],

}, {timestamps: true});

module.exports = mongoose.model('Event', eventSchema);