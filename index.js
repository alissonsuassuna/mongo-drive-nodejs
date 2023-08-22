const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('tipscodeDb');
    const products = database.collection('products');

    const newProduct = {
        name: "Mac",
        price: 10.000,
        stock: 5,
    }

    //inserindo o newProduct no banco
    const result = await products.insertOne(newProduct)
    console.log("Produto cadastrado com sucesso", result.insertedId)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);