// seedProducts.js
const Product = require('./models/product'); // Import Product model
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const axios = require('axios');
const connectDB = require('./config/db'); // Import the DB connection

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const fetchAndSeedProducts = async () => {
    try {
        // Fetch products from fakestoreapi
        const { data } = await axios.get('https://fakestoreapi.com/products');
        
        // Clear existing products
        await Product.deleteMany();
        
        // Insert the fetched products into MongoDB
        await Product.insertMany(data);
        
        console.log("Products have been seeded successfully!");
        process.exit(); // Exit the process after completion
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
};

// Run the seeding function
fetchAndSeedProducts();
