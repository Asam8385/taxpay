const Verification = require('../Models/Verification');

exports.verify= async (req, res) => {
    const { testid } = req.params;
    console.log(testid)

    try {
        const verificationData = await Verification.findOne({ testid });

        if (!verificationData) {
            return res.status(200).json('error', { message: 'Verification data not found' });
        }

        if (verificationData.status) {
            return res.status(200).json({
                message: 'Verification successful',
                data: verificationData
            });
        } else {
            return res.status(400).json('error', { message: 'Test failed' });
        }
    } catch (error) {
        return res.status(500).json('error', { message: 'Server error', error: error.message });
    }
};
