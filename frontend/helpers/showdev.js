module.exports = function (data, callback,showAlert = false) {
    if (NODE_ENV === 'development') {
        console.log(data);
        if (showAlert) {
            alert(data);
        }
        if (callback){
        	callback();
        }
    }
};