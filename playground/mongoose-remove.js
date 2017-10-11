const {ObjectID} =require('mongodb');

const {mongoose}= require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove({})

//Todo.findByIdAndRemove(id)
// Todo.findOneAndRemove({_id:''}).then((todo)=>{
//
// });

Todo.findByIdAndRemove('59de2045391909f14d14d377').then((doc)=>{
  console.log(doc);
});
