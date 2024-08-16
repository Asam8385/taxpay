const User = require('../Models/User'); // Replace with the correct path to your User model

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        if (password !== user.password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // If the credentials are correct, you can generate a token or return user info
        // For example:
        return res.status(200).json({ message: 'Login successful', user });

    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};


exports.getUser = async (req, res) => {
    const { email } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user data (excluding sensitive information like password)
        return res.status(200).json({ user });

    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};


exports.updateUser = async (req, res) => {
    const { email } = req.body;

    try {
        // Find the user by email
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Define the fields that can be updated (excluding sensitive ones like password)
        const updates = {
            name: req.body.name,
            role: req.body.role,
            // Add other fields you want to allow updating
        };

        // Update the user in the database
        user = await User.findOneAndUpdate({ email }, { $set: updates }, { new: true });

        // Return the updated user data
        return res.status(200).json({ message: 'User updated successfully', user });

    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};
