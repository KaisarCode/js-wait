// Wait miliseconsd and exec
// @t: time in miliseconds
// @cb: callback
/*
Returns an object with
    - "stop" method: Clear interval.
    - "id" property: Interval id.
*/
function wait(t, cb) {
    var o = {};
    o.i = 0;
    o.id = setTimeout(
    function(){
        o.i++;
        cb(o);
    },t);
    o.stop = function() {
    clearInterval(o.id);
    }; return o;
}
