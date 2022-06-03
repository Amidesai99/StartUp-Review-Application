const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql2");



const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Divahottie@99",
    database:"CRUDDataBase",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/get', (req,res)=>{
    const sqlSelect = "SELECT * FROM startup_reviews";
    db.query(sqlSelect,  (err,result)=> {
        res.send(result);
    });    

});


app.post("/api/insert", (req,res)=>{

    const startUpName = req.body.startUpName;
    const startUpReview = req.body.startUpReview;
    const sqlInsert = "INSERT INTO startup_reviews(startUpName,startUpReview) VALUES (?,?)";
    
    db.query(sqlInsert, [startUpName,startUpReview], (err,result)=> {
        console.log(result);


    });
});



app.listen(3001, () => {
    console.log("running on port 3001");
});