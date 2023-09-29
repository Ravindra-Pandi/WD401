// var exp=require('express');
// var request=require("request");
// var e=exp();

// const { initializeApp, cert } = require('firebase-admin/app');
// const { getFirestore} = require('firebase-admin/firestore');
// var serviceAccount = require("./key.json");
// initializeApp({
//     credential: cert(serviceAccount)
//   });
//   const db = getFirestore();


// e.get("/",function(req,res){
//     res.sendFile("C:/Users/VINAY KUMAR/Desktop/SampleFolder/WD401/yesu/sig.html");
// })

// e.get("/k",function(req,res){
//     res.sendFile("C:/Users/VINAY KUMAR/Desktop/SampleFolder/WD401/yesu/log.html");
// })
// e.get("/sig",function(req,res){               
//     var a=req.query;
//     email=a.user;
//     password=a.pass;
//     res.send("You Signed in Successfully with " + email);
//     db.collection('yesubabu').add({
//         Emailad : email ,
//         Passwordad :password
//     })
// })

// e.get('/log', function(req, res) {
//     var a = req.query;
//     var imail = a.username;
//     var iassword =a.password;
//     var dataPresent = false; // Flag to track data presence

//     db.collection('yesubabu').get().then((docs) => {
//         docs.forEach((doc) => {
//             if (imail == doc.data().Emailad && iassword == doc.data().Passwordad) {
                
//                 dataPresent = true;
//             }
//         });

//         if (dataPresent) {
//             res.send("data present in Firebase");
//         } else {
//             res.send("data not present in Firebase, please login");
//         }
//     });
// });

// e.listen(8000);

const express=require('express');
const path=require('path');
const app=express();


//intializing the engine
app.set('view engine','ejs');

app.use(express.static('public'));

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');
var serviceAccount = require("./key.json");

initializeApp({
  credential: cert(serviceAccount)
});
const db=getFirestore();

app.get('/signup',function(req,res){
    res.sendFile(__dirname+"/public/"+"signup.html");
})
app.get('/login',function(req,res){
    res.sendFile(__dirname+"/public/"+"login.html");
})
app.get('/signupsubmit',function(req,res){
    db.collection('login').add({
        name:req.query.name,
        email:req.query.email,
        password:req.query.password

    })
    .then(()=>
    {
        e.get('/log', function(req, res) {
            var a = req.query;
            var imail = a.email;
            var iassword =a.password;
            var dataPresent = false; // Flag to track data presence
        
            db.collection('yesubabu').get().then((docs) => {
                docs.forEach((doc) => {
                    if (imail == doc.data().Emailad && iassword == doc.data().Passwordad) {
                        
                        dataPresent = true;
                    }
                });
        
                if (dataPresent) {
                    res.send("data present in Firebase");
                } else {
                    res.send("data not present in Firebase, please login");
                }
            });
    })
})})

app.listen(8090);