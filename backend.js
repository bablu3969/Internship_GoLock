const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");

const app=express()
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
var cors = require('cors');
app.use(cors());
// app.use(express.json());
// app.set('view engine','ejs');
// app.use(express.static(__dirname+'/public'));

mongoose.connect("mongodb://127.0.0.1:27017/Go_Lock",{
        useNewUrlParser:true
});
const userSchema = mongoose.Schema({
    USER:String,
    PASS:String,
    ROLE:String,
    ADDRESS:String

});
const orderSchema = mongoose.Schema({
    order_id:String,
    to:String,
    from:String,
    quantity:String,
    transporter:String

});
const User = new mongoose.model("User",userSchema);
const Order = new mongoose.model("Order",orderSchema);


app.post("/signup",async(req,res)=>{
    var {USERNAME,PASSWORD,STATUS,ADDRESS,ROLE} = req.body;
    console.log("req received");
    console.log(USERNAME);
    console.log(req.body);
    if(STATUS===1)
    {
        await User.create({USER:USERNAME,PASS:PASSWORD,ROLE:ROLE,ADDRESS:ADDRESS})
    }
});
app.post("/login",async(req,res)=>{
       var {USERNAME,PASSWORD,STATUS,ADDRESS,ROLE} = req.body;
       if(STATUS===0){
        var c= await User.find({USER:USERNAME,PASS:PASSWORD})
        console.log(req.body);
        console.log(USERNAME,PASSWORD);
        console.log("c=",c);

        if(c.length===0){
            // res.send("no match");
            return res.send("no match");
        }
        else{
            // res.send("match");
            console.log(c[0].ROLE);
            return res.send(c[0].ROLE);
        
        }
    }
});

app.post("/push",async(req,res)=>{
    var {ORDER_ID,TO,FROM,QUANTITY,TRANSPORTER} = req.body;
    console.log(req.body);
    await Order.create({order_id:ORDER_ID,to:TO,from:FROM,quantity:QUANTITY,transporter:TRANSPORTER});
    console.log("created");
    
})
app.post("/sendorders",async(req,res)=>{
    var {USERNAME} = req.body;
    console.log(req.body);
    var y = await Order.find({transporter:USERNAME})
    return res.send(y);
    
})
app.listen(5000,function(req,res){
    console.log("Database connected");
});