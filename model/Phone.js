const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    name : {
        type : String,
        require :true,
    },
    id:{
        type : String,
        require:true,
    },
})

const Phone = mongoose.model('song', phoneSchema , 'songs');

module.exports = Phone;