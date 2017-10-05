const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Enable to connect to MongoDB Server !');
  }
  console.log('Connect to MongoDB server');

    // db.collection('Todos').findOneAndUpdate(
    //   {text:'Eat lunch',completed:false
    //   },{
    //     $set: {
    //       completed:true
    //     }
    //   },{
    //     returnOriginal:false
    //   }).then((result)=>{
    //     console.log(result);
    //   });
    db.collection('Users').findOneAndUpdate(
      {
        _id : ObjectID("59d4de7b2bf3d029b88ee77d")
      },{
        $set:{
        name:'Samuel'},
        $inc:{age:1}

      },{
        returnOriginal:false
      }).then((result)=>{
        console.log(result);
      });
  //db.close();
});
