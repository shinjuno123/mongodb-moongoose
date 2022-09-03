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


// person.save().then((value)=>{console.log(value);});


const strawberry = new Fruit({
    name : "Strawberry",
    score : 7,
    review : "This was not bad!"
})

strawberry.save();

await Person.updateOne({name : "Junho Shin"}, {favoriteFruit : strawberry});






const fruit = new Fruit({
    rating : 10,
    review : "Peaches are so yummy!"
})

// await Fruit.deleteOne({name : "Peach"},function(err){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("Succeeded!");
//     }
// });


// await Person.deleteMany({name: "Junho Shin"});

/*
Fruit.updateOne({_id:"6313479eb08d449cf523cf0e"},{name:"Peach"},function(err){
    if (err){
        console.log(err);
    }
    else{
        console.log("Succeeded!");
    }
});
*/


// fruit.save();
/*
const kiwi = new Fruit({
    name : "Kiwi",
    score : 10,
    review : "The best fruit!" 
})
const orange = new Fruit({
    name : "Orange",
    score : 4,
    review : "Too sour for me" 
})

const banana = new Fruit({
    name : "Banana",
    score : 3,
    review : "Weird texture" 
})

// Fruit.insertMany([orange, kiwi, banana], function(err){
//     if (err) throw err;
//     else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

*/
// await Fruit.find(function(err, fruits){
//     if(err) throw err;
//     else {

//         // mongoose.connection.close();

//         fruits.forEach(function(value){
//             console.log(value.name);
//         });
//     }
// });



// import { CURSOR_FLAGS, MongoClient } from "mongodb";
//
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     const database = client.db("fruitsDB");
//     const fruit = database.collection("fruit");
    
//     // const doc = [{ name: "Apple", score: 8, review: "Greate fruit" },
//     // { name: "Orange", score: 6, review: "Kinda sour" },
//     // { name: "Banana", score: 9, review: "Great stuff!" }];
//     // // create a document to insert

//     // const options = {ordered: true};

//     // const result = await fruit.insertMany(doc,options);
//     // console.log(`A document was inserted with the _id: ${result.insertedCount}`);


//     const cursor = await fruit.find();

//     await cursor.forEach((doc)=>console.log(doc));


 
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);

