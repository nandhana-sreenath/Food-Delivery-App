const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://flavourhubdb:nandhu1503@cluster0.mxgybpe.mongodb.net/flavourhubmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected ");

    const collection = mongoose.connection.db.collection("food_items");
    
    // Using async/await to fetch data
    const data = await collection.find({}).toArray();
    console.log(data);
    
    // You can also use the callback approach
    // collection.find({}).toArray(function (err, data) {
    //   if (err) console.log(err);
    //   else console.log(data);
    // });

  } catch (err) {
    console.error("---", err);
  }
};

module.exports = mongoDB;
