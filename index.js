const app = require('./config/express');
const { port } = require('./config/variables');
const mongoose = require('./config/mongoose');

mongoose.connect();





app.listen(port, () => console.log(`App lisening in port ${port}`, ))