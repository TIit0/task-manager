
function errorHandler(err, req, res, next) {
    res.status(500).json({err, msg: "IT BROKEN"})
}

module.exports = errorHandler