const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/db1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected!"))
  .catch((err) => console.log("there is an error"));

const groceryFoodSchema = new mongoose.Schema({
  category: {
    type: String,
    required:true,
  },
  name: {
    type: String,
    required:true,
  },
  quantity: {
    type: Number,
    required:true,
  },
  price: {
    type: Number,
    required:true,
  },
  expiry: {
    type: Date,
    required:true,
  },
  createdAt: {
    type: Date,
    required:true,
  },
});

const GroceryFood = new mongoose.model("Stu", groceryFoodSchema);

//create async await function
const createDocument = async () => {
  try {
    //create or insert document
    const objGroceryFoodSchema = new GroceryFood({
      category: "Fruits",
      name: "Apple",
      quantity: 50,
      price: 150,
      expiry: new Date(),
      createdAt: new Date(),
    });

    const result = await objGroceryFoodSchema.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();

//  For practise
// const stuSchema = new mongoose.Schema({
//   path: String,
//   value: {
//     type: String,
//     required: true,
//   },
// });

// const Stu = new mongoose.model("Stu", stuSchema);

// //create async await function
// const createDocument = async () => {
//   try {
//     //create or insert document
//     const objStuSchema = new Stu({
//       path: "firstnnnnn",
//       value: "1",
//     });

//     const result = await objStuSchema.save();
//     console.log(result);
//     console.log("resss");
//   } catch (err) {
//     console.log(err);
//   }
// };

// createDocument();

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
