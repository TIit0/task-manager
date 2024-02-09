
const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (e) {
            next(e) // not set up yet
        }
    }
}

module.exports = asyncWrapper;