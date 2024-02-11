const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.SECRET_KEY}@cluster0.xzrm3w1.mongodb.net/todos`);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}