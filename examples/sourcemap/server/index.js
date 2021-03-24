const express = require('express');
const fs = require('fs');
const sourceMap = require('source-map');
const path = require('path');
const app = express();
const port = 3000;

const resolve = (file)=>path.resolve(__dirname,file);
app.get('/error/',async function(req,res){
    console.log(req.query.error,"req.query.error")
    let error = JSON.parse(req.query.error);
    let url = error.scriptURI;
    if(url){
        let fileUrl = `${url.substring(url.lastIndexOf('/') + 1).trim()}.map`; // map文件路径
        console.log(fileUrl,'fileUrl')
        let consumer = await new sourceMap.SourceMapConsumer(
            fs.readFileSync(resolve('./'+fileUrl),'utf8')
        )
        let result = consumer.originalPositionFor({
            line:error.lineNo,
            column:error.colno
        });
        console.log(result);
        res.json(result);
    }
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
// http://127.0.0.1:3000/error/?error={%22source%22:%22http://127.0.0.1:5500/examples/sourcemap/dist/main.js%22,%22lineno%22:1,%22colno%22:84}




