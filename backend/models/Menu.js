const {Schema, model} = require('mongoose');

const menuSchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    img: {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Menu', menuSchema)