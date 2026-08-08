const express =require("express");

const app = express();
 

const part =3000

app.get("/",(req,res)=>{

    res.send("asslam o alaikum")
    
})
app.get("/shahbaz",(req,res)=>{

    res.send("w/asslam")
    
})

app.listen(part,()=>{
    console.log(`server chal gaya hai${part}`)
})