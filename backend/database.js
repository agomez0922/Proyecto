const mongoose = require("mongoose")

const atlas = "mongodb+srv://dbAngello:342596@clusterstriker.ysjmi.mongodb.net/Proyecto?retryWrites=true&w=majority"
//const local = "mongodb://user:pass@localhost:27017/empresaDB"
const local = "mongodb://localhost:27017/Proyecto"

mongoose.connect(local, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Conectado Correctamente a la BD :)"))
    .catch(err => console.log(err))

module.exports = mongoose;