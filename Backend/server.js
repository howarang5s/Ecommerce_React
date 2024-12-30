const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productsRoutes');
const cors = require('cors');
const path = require('path'); // Add path module

dotenv.config();

// Connect to Database
connectDB();

const app = express();

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Define Routes
app.use('/api/products', productRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build'))); // Adjust this path based on your folder structure

// Handle any requests that don't match any API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html')); // Serve index.html for any unmatched routes
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
