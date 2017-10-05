const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Enable to connect to MongoDB Server !');
  }
  console.log('Connect to MongoDB server');


  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({name:'Samuel'}).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({_id: new ObjectID('59d4e1c6f0469c0864a2d08e')}).then((resultI)=>{
    console.log(resultI)
  });

  //db.close();
});
