const httpStatus = require("http-status");


const login = (req, res, next) => {
    console.log("On Login controller")
    res.status(httpStatus.OK).json({message:"Login Route reached"})
}

const register = (req, res, next) => {
    console.log("On Register route")
    res.status(httpStatus.OK).json({message:"Register Route reached"})
}

module.exports = {
    login,
    register
}