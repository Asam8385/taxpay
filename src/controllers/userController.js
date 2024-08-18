const User = require('../Models/User');

exports.signup = async (req, res) => {
    try {
        const {email, password } = req.body;


        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }


        const newUser = await User.create({  email, password });

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



exports.update = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        existingUser.password = password; 
        await existingUser.save();

        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};