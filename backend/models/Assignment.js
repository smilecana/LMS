//Brady MacDonald

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Assignment fields which will be uploaded to database
const assignmentSchema = new Schema({
    assignmentNum: {
        type: String,
        required: true
    },
    file: {
        type: Object,
        required: true
    },
    fileName:{
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    grade:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Assignment", assignmentSchema, "assignments")