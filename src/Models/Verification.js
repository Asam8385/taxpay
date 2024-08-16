
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
    testid: String
});

const Verification = mongoose.model('Verification', verificationSchema);

module.exports = Verification;
