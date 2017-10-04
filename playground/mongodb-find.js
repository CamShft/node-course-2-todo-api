const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Enable to connect to MongoDB Server !');
  }
  console.log('Connect to MongoDB server');

  // db.collection('Todos').find({
  //   _id:new ObjectID('59d4e5fbd3e3fe9ef659fc76')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log("Unable to fetch todos",err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  // },(err)=>{
  //   console.log("Unable to fetch todos",err);
  // });


  db.collection('Users').find({name:'Samuel'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log("Unable to connect to database",err);
  })
  //db.close();
});
