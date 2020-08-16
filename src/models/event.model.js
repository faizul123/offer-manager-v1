const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const EventSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ["pageView", "itemView", "itemAdd", 
                "itemRemove", "itemOrdered", "orderCancelled"],
        required: true,
    },
    offerId: {
        type: mongoose.Types.ObjectId,
        ref: true,
    },
    shopId: String,
    userId: String,
});

EventSchema.plugin(toJSON);
EventSchema.plugin(paginate);

module.exports = mongoose.model('EventSchema', EventSchema);