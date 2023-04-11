//packages jsx engine, reactdom react
//require modules
const express =require('express');
const fruits= require('./models/fruits');
//create express app
const app= express();
const   PORT = 3000;

//===== view template configuration====
//set view engine,npm
app.set('view engine','jsx');
//turn on the engine,installed in package 
//app.set('views','./views')
app.engine('jsx',require('jsx-view-engine').createEngine())

//const fruits = ['apple', 'banana', 'pear'];

//===mounts middleware,creates=====
//creating middleware,runs for all routes,usually no need to create u have middleware to parsing logging etc
app.use((req,res,next)=>{
  console.log(req.url);
  next();//runs next middleware
})
//parses data from form request, puts data in the req.body to display.same all the time.
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>');
})
/**
 * Index:Routes (return list of fruits)
 */

//mount routes
app.get('/fruits/',(req,res)=>{
    //res.send(fruits);
    //like above dont send raw data,render new template, name of template is Index
    res.render('Index',{fruits:fruits})
})
/**
 * post methods(accept data from form)
 */
app.post('/fruits',(req,res)=>{

//middlewarre parses form data and put in object and gives it in form body
    console.log(req.body)//url encode middlewarw 
   //if checked, req.body readytoeat is set to on
   if(req.body.readyToEat === 'on'){
    req.body.readyToEat=true;
    }else{
    req.body.readyToEat=false;
   }
   //data is always in req body
    //push the fruit object into fruit array and respond with array
   
    fruits.push(req.body);
  //res.send(fruits);
  //res.redirect(',/fruits');
  res.redirect('/fruits')
})
/**
 * New route:return form to create new route
 */
app.get('/fruits/new',(req,res)=>{
 res.render('New')
    
})
/**
 * add show routes(return single fruit)
 */

app.get('/fruits/:indexofFruitArray',(req,res)=>{
    //res.send(fruits[req.params.indexofFruitArray])

    //passing object key , key of object to jzx template which is in show.jsx, since using react it can b passes as props
    res.render('Show',{fruit:fruits[req.params.indexofFruitArray]});

})

//if path doesnt match ,redirects user to this
app.get('*',(req,res)=>{
   // res.redirect('/fruits');
   //res.redirect('404');
   res.render('404');
})


//tell app to listen at port 
app.listen(3000,function(){
    console.log(`listening to port :${PORT}`);
})

