const express = require('express');
const app = express();
// 托管静态资源
app.use('/node_modules',express.static('../node_modules'))
app.use(express.static('./views'));
app.listen(4000,()=>{
    console.log('http://127.0.0.1:4000')
})