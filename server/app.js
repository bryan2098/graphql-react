const express = require("express");
const grapqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();


app.use(cors());

mongoose.connect('mongodb://grapqlbook:nguyentri1998@ds359298.mlab.com:59298/grapqlbook')

app.use('/graphql', grapqlHTTP({
    schema,
    graphiql: true
}));



app.listen(4000, () => {
    console.log("Server Start");
})
