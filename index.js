const express = require('express');
const app=express();
const port=process.env.PORT || 5000;
var cors = require('cors')
const categories=require('./data/categories.json');



app.use(cors())
app.get('/',(req,res)=>{
	res.send('News App is Running');
});

app.get('/categories',(req,res)=>{
	res.send(categories);
})
app.listen(port,()=>{
	console.log(`News API Is Running on  Port:${port}`);
})
