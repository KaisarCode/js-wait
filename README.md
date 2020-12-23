# Wait
[js] Wait miliseconsd and exec.

### Install
```
npm install kc-wait
```

### Use
```js
var wait = require('kc-wait');
var t = wait(1000, function(){
    console.log('Ready!');
    
    // you can cancel the timeout:
    // t.stop();
});
```
