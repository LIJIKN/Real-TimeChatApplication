const User = require("../models/user");
const Chat = require("../models/chat");
console.log("signup")
const jwt = require("jsonwebtoken");
const signUp = async (req, res) => {

  otp = req.params.otp; 
  
   console.log("ok")
  try {
    // console.log("try");
    const newUser = await User.create({
      name: req.body.item.username,
      email: req.body.item.userEmail,
      passwordHash: req.body.item.password,
      confpassword: req.body.item.confpassword,
      otp: otp,
    });

    console.log(newUser)

    res.status(201).send(newUser);
  } catch (err) {
    res.status(403).send("Cannot Create an User");
  }
};


const login = async (req,res) =>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers: Content-Type, application/json");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  try{
    uname = req.body.user.username;
    pwd = req.body.user.password;
    User.findOne({"username":uname},function(err,user){
      if(user){
       console.log("user");
        if(pwd == user.passwordHash){
          console.log("password ok");
          let payload = {subject:uname+pwd};
          let token =jwt.sign(payload,'secretkey');
          let userNames = {subject:uname};
          let userToken = jwt.sign(userNames.subject,'secretkey');
          const username = jwt.verify(userToken, "secretkey");
          res.status(200).send({user:true,token,username});
        }
        else
        {
          res.json({unathorised:true}).status(401);
        }
      }
      else
      {
        res.json({unathorised:true}).status(401);
      }
    })
  }
  catch {
    // console.log(err);
    console.log("Login error");
  }
}
 
const search = async (req,res) => {
  SearchName = req.body.values.SearchName;
  //  console.log(SearchName);
  userName1 = req.params.username;
  //  console.log(userName1);
  try
  {
    
    const users = await User.findOne( {
     $and:[
        { username: { $ne: userName1} },
        { username: SearchName }
      ]
    } )
    res.status(201).json(users);
  }
  catch(err){
    console.log(err);
  }
}

const getMsg = async (req, res) => {
  try {
    from = req.params.currentuser;
    to = req.params.username;
    const chat = await Chat.find({
      $or:[
        {$and:[
        { fromUserName:from},{ toUserName:to}
      ]},
      {$and:[
        { toUserName:from},{fromUserName:to}
      ]}
      ]
    });
    res.status(200).json(chat);
  } catch(err) {
    console.log(err);
    res.send({ error: "User doesn't exist!" });
  }
};


module.exports = {signUp,login,search,getMsg};