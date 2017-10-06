const {ObjectID} =require('mongodb');

const {mongoose}= require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/user');
// var id = '59d7caa2f6a0c59027536bb611';
//
// if(!ObjectID.isValid(id)){
//   return console.log('ID not valid');
// };
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id',todo );
// }).catch((e)=>console.log(e));

var id = '59d77ce2aa9e60f41b1f0116';
User.findById(id).then((user)=>{
  if(!user)
  {
    return console.log('Can\'t be found !');
  }
  console.log('User By ID', user);
}).catch((e)=>console.log(e));
