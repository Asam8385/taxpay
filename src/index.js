const express = require('express');
const connectDB = require('./config/database');
const path = require('path');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authroutes');
const cors = require('cors');
const userRoutes = require("./routes/userRoute");
const verificationRoutes = require('./routes/verificationRoutes');
const otpRoutes = require('./routes/otpRoutes');
dotenv.config({ path: path.resolve(__dirname, '../.env') });



const app = express();

// Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


app.use('/auth', authRoutes);
app.use('/verification', verificationRoutes);
app.use('/otp', otpRoutes);
app.use('/user', userRoutes);


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
  
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.json(err.status);
  });

// Connect to MongoDB and start the server
connectDB().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Failed to start the server:', err);
});