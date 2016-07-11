module.exports = function(data, callback) {
    if (NODE_ENV === 'development') {
        console.info(data);
        if (callback) {
            callback();
        }
    }
};
