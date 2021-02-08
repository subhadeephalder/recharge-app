if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

//Modules
const express=require('express')
const app=express()
const bcrypt=require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const config=require('./config')
const port=process.env.PORT || 8080;
const authy = require('authy')("kParmpXpzP8Ui9Jg8Y1ew2MND0zvxsDU");
//import { Client } from 'authy-client';
const initializePassport = require('./passport-config')
const bodyParser = require('body-parser');
const pool = require('./pool')
const Nexmo = require('nexmo');
const { createPoolCluster } = require('mysql')
var global
app.use(bodyParser.json()); // for parsing POST req
app.use(bodyParser.urlencoded({
  extended: true
}));
const nexmo = new Nexmo({
  apiKey: '2d84dc81',
  apiSecret: 'FjCPn1rFwkDRGdLc',
});

initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/index',checkAuthenticated,(req,res)=>{
    res.render('index.ejs')
})
app.get('/dashboard',(req,res)=>{
  res.render('dashboard.ejs')
})
app.get('/otp',(req,res)=>{
  res.render('otp.ejs')
 
})

app.get('/register',checkNotAuthenticated,(req,res)=>{
   res.render('register.ejs')
})

app.get('/login',checkNotAuthenticated,(req,res)=>{
   res.render('login.ejs')
})


app.post('/register',checkNotAuthenticated,async(req,res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
          var regtime = Date.now().toString();
          var Name = req.body.name;
          var email = req.body.email;
          var phoneNumber =req.body.contact;
          var password = hashedPassword;
          var countryCode='91';
          console.log(password)
          var contacts=countryCode+phoneNumber;
          
          //callUsers(email,phoneNumber,countryCode)
        var sql = "INSERT INTO customers(regtime,username,email,contact,password) VALUES ('"+regtime+"','"+Name+"','"+email+"', '"+parseInt(req.body.contact)+"', '"+password+"' ) ";
        //authy.request_sms(authy_id);
        //console.log(1);
        pool.query(sql,function(err,result){
          message = "Succesfully! Your account has been created";
          res.render('register.ejs',{message: message})
      });

         
    
     res.redirect('/login')
    }
    catch{
      res.redirect('/register')
    }
});



app.post('/login', checkNotAuthenticated , (req,res) => {
    
  
email = req.body.email
password = req.body.password

var sql = "SELECT password FROM `customers` WHERE `email`='"+email+"' "
var sql1 = "SELECT contact FROM `customers` WHERE `email`='"+email+"' "
        pool.query(sql,function(err,results){
            if(results.length==1){
              bcrypt.compare(password,results[0].password,function(err,result){
    
              if(result == true){
                pool.query(sql1,function(err1,results1){
                  console.log(results1[0].contact)
                  nexmo.verify.request({number:'91'+results1[0].contact,brand:'Vonage',code_length:'4'},(error,response)=>{
                    console.log(error ? error : response)
                    let requestId=response.request_id;
                    global=response.request_id;
                    res.render('otp.ejs',{requestId:requestId});
                  })
                  
                })
               
              }
              else
              res.redirect('/register')
              })    
            }
            else{
              res.redirect('/register')
            }
        })
  })

app.post('/otp', (req,res)=>{
  
   var pin=req.body.otp
   var requestId=global
   console.log(pin)
   console.log(requestId)
   nexmo.verify.check({
    request_id: requestId,
    code: pin
  }, (err, result) => {
    console.log(err ? err : result)
    if(result.status==0){res.redirect('/dashboard')}
    else{res.redirect('/login')}
  });
  })

  function checkAuthenticated(req, res, next) {

    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }
  function callUsers(email,number,code){
    authy.register_user(email,number,code,function(err,res){
      console.log(res.user.id)
    })
  }
app.listen(port)