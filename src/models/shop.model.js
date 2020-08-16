const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const ShopSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        line1: {
            type: String,
        },
        line2: {
            type: String,
        },
        landMark: {
            type: String,
        },
        city: {
            type: String,
        },
        country: {
            type: String,
        },
    },
    contacts: [String],
    website: String,
    email: String,
    shopTime: {
        open: Date,
        close: Date,
    }
});

ShopSchema.plugin(toJSON);
ShopSchema.plugin(paginate);

module.exports = mongoose.model('ShopSchema', ShopSchema);
