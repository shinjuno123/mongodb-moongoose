# 👍 Why shoud we use mongoose

## Technical Stack
- Mongoose
- MongoDB
- Javascript
- Node.js

## Overview
As below, I could see mongoose is much more simpler and highly readable comparing to using mongoDB itself.

## Comparison Code

### MongoDB
```js
 import { CURSOR_FLAGS, MongoClient } from "mongodb";

 // Replace the uri string with your MongoDB deployment's connection string.
 const uri = "mongodb://localhost:27017";
 const client = new MongoClient(uri);
 async function run() {
   try {
     const database = client.db("fruitsDB");
     const fruit = database.collection("fruit");
  
     const doc = [{ name: "Apple", score: 8, review: "Greate fruit" },
     { name: "Orange", score: 6, review: "Kinda sour" },
     { name: "Banana", score: 9, review: "Great stuff!" }];
     // create a document to inser
     const options = {ordered: true}
     const result = await fruit.insertMany(doc,options);
     console.log(`A document was inserted with the _id: ${result.insertedCount}`)
     const cursor = await fruit.find()
     await cursor.forEach((doc)=>console.log(doc))
   } finally {
     await client.close();
   }
}

run().catch(console.dir);
```
I could check MongoDB library code keeps going inside and inside of bracket as I write code.



### Mongoose
```js
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/fruits',{useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true,"Please check your data entry, no name specified!"]
    },
    rating : {
        type: Number,
        min : 1,
        max : 10
    },
    review : String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit : fruitSchema
});

const Person = mongoose.model("Person",personSchema);


person.save().then((value)=>{console.log(value);});


const strawberry = new Fruit({
    name : "Strawberry",
    score : 7,
    review : "This was not bad!"
})

strawberry.save();

await Person.updateOne({name : "Junho Shin"}, {favoriteFruit : strawberry});
```
This code looks way simpler and highly readable and easy.

