require('dotenv').config()

module.exports = {
    port:process.env.DEV_PORT,
    mongoURI:process.env.MONGO_URI
}