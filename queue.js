var q = [];
var cb = null;
module.exports = {
    push: function(param) {
        if (cb) {
            setTimeout(() => {
                cb(param);
            }, 0);
        } else {
            q.push(param);
        }
    },
    setCallback: (callback) => {
        cb = callback;
        let callCb = () => {
            setTimeout(() => {
                cb(q.pop());
                if (q.length) {
                    callCb();
                }
            }, 0);
        }

        if (q.length) {
            callCb();
        }
    }
}
