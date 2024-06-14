const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const app = express();
const taskRoute =require("./routes/taskRoute");
const cors = require('cors');

// middle ware 
app.use((req,res,next)=> {
    console.log('path' + req.path + 'method' + req.method);
    next(); 
});
app.use(express.json());
app.use(cors());

// app.get('/',(req,res)=> {
//     res.send("Hello kamal");
// });

// DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(process.env.PORT,()=> {
            console.log(`DB connected  successfully listining to ${process.env.PORT}`); 
        });
    }).catch((error)=> console.error(error));

app.use('/api/tasks',taskRoute);
