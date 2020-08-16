const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const ItemSchema = mongoose.Schema({
    shopId: {
        type: mongoose.Types.ObjectId,
        ref: 'Shop',
    },
    name: {
        type: String,
        required: true,
    },
    sellingPrice: {
        type: Double,
        required: true,
    },
    offerPrice: {
        type: Double,
        required: true,
    },
    photoURL: {
        type: String,
        required: true,
    },
});

ItemSchema.plugin(toJSON);
ItemSchema.plugin(paginate);

module.exports = mongoose.model('ItemSchema', ShopSchema);