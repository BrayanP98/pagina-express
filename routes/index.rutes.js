import { Router } from "express";
import Task from "../models/TASK";
import User from "../models/USUARIOS";
import Prod from "../models/PRODUCTOS";


const router = Router();
//////
let nombre_user="";
router.get("/", async (req, res) => {

  const user = User(req.body);
 
  if(nombre_user===""){
    res.render("index.hbs");
    console.log('sin nombre');
    
  }else{
    const users= await User.find({nombre:nombre_user}).lean();
    
   res.render("index.hbs", { users: users });
  }

});


//////////
//actualizacion produ////
router.get("/product", async (req, res) => {

  const producto = Prod(req.body);
 
    const prods= await Prod.find().lean();
    
    res.render("product.hbs", { prods: prods });

});

//////////

router.post("/task/findUser", async (req, res) => {
  const requ=(req.body);
 try{
  const user= User(req.body);
  const users = await User.find(requ).lean();
  //console.log(users),
  nombre_user=users[0].nombre;
  
  res.redirect("/");
 }catch(error){
 res.redirect("/");
 
  //res.render("index.hbs",{errors:"no"});
 //res.send(' <script>window.history.go(-1)</script> <script>alert("verifique sus datos por favor"); </script>');
 }
 
 
});

(function recargar(){

router.get("/", async (req, res) => {

    const user = User(req.body);
   
    if(nombre_user===""){
      res.render("index.hbs");
      console.log('sin nombre');
      
    }else{
      const users= await User.find({nombre:nombre_user}).lean();
      
      res.render("index.hbs", { users: users });
    }
 
});
})();


router.post("/task/add", async (req, res) => {
  const task = Task(req.body);
  const tasksave = await task.save();
  res.redirect("/");
  // res.send('<script>alert("bienvenido")</script>');
});

/////
router.post("/task/addUser", async (req, res) => {

  try{

    const user = User(req.body);
    const usersave = await user.save();
    res.redirect("/");
  }catch(error){
    res.send('<script>window.history.go(-1)</script>');
   // res.send('<script>alert("no se")</script>');
  //res.send('<script>alert("verifique sus datos por favor"); window.history.go(-1)";</script>');
  }
  
  // res.send('<script>alert("bienvenido")</script>');
});

router.get("/about", (req, res) => {
  res.render("about.hbs");
});
router.get("/product", (req, res) => {
  res.render("product.hbs");
});

export default router;
