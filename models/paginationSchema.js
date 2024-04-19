const mongoose = require("mongoose");

const paginationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true
    },
    cast: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});


const Pagination = new mongoose.model("Pagination", paginationSchema);

module.exports = Pagination;