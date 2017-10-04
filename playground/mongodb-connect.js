// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user ={name:'samuel',age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Enable to connect to MongoDB Server !');
  }
  console.log('Connect to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed:false
  // },(err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name:'Samuel',
  //   age:22,
  //   location:'Chicoutimi'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert user in Users collection.',err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  // });

  db.close();
});
