const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema({
    name: String,
    address: String,
    telephone: String,
    email: String,
    gender: String,
    nicNo: String,
    nicPhoto: String,
    regNo: String,
    vehicleClass: String,
    engNo: String,
    chassisNo: String,
    fuelType: String,
    model: String,
    yearManu: String,
    status: Boolean, 
    numplateimage: String,
    email: String,
    testid: String,
    startDate: { type: Date, required: true }, // Start date of verification
    expiryDate: { type: Date, required: true } // Expiry date of verification
});

const Verification = mongoose.model('Verification', verificationSchema);

module.exports = Verification;
