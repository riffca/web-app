module.exports = function(data, callback) {
    if (NODE_ENV === 'development') {
        console.log(data);
        if (callback) {
            callback();
        }
    }
};
