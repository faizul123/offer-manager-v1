const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const OfferSchema = mongoose.Schema({
    shopId: {
        type: mongoose.Types.ObjectId,
        ref: true,
    },
    offerPeriod: {
        start: Date,
        end: Date,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: true,
    }
});

OfferSchema.plugin(toJSON);
OfferSchema.plugin(paginate);

module.exports = mongoose.model('OfferSchema', OfferSchema);