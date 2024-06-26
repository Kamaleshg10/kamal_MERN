const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Taskschema = new Schema(
    {
        title: {
            type: String,
            require: true,
            }, // String is shorthand for {type: String}
        description: {
            type: String,
            }
    },
    {timestamps:true}
);

module.exports = mongoose.model('Task',Taskschema);