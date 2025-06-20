import {addUser, findUserById, listAllUsers, updateUserById, deleteUserById, getUserByEmail, getEmailAvailability} from "../models/user-model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const getUser = async (req, res) => {
  res.json(await listAllUsers());
};

const getUserById = async (req, res) => {
  const user = await findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const updateUser = async (req, res) => {
  try {
    const { email, password, confirmPassword, phone_number } = req.body;
    const id = req.params.id;

    // if email is being changed
    if (email) {
      const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValidation.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
      }

      const isAvailable = await getEmailAvailability(email); 
      if (!isAvailable) {
        return res.status(400).json({ message: 'Email already in use.' });
      }
    }

    // if password is being changed
    if (password || confirmPassword) {
      if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match.' });
      }
      if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
      }
      req.body.password = bcrypt.hashSync(password, 10);
    }

    // if phone number is being changed
    if (phone_number) {
      const phoneValidation = /^\d{10}$/; // Change 10 to match your desired length
      if (!phoneValidation.test(phone_number)) {
        return res.status(400).json({ message: 'Phone number must be 10 digits (numbers only).' });
      }
    }

    const updateResult = await updateUserById(req.body, id);

    if (updateResult) {
      res.status(200).json({ message: 'User updated successfully.', updateResult });
    } else {
      res.status(404).json({ message: 'User not found.' });
    }

  } catch (error) {
    console.error('Error in updating the profile:', error.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, phone_number, password, confirmPassword } = req.body;

    if (!name || !email || !phone_number || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // password valitation
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
    }

    // email validation
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidation.test(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }

    const isAvailable = await getEmailAvailability(email);
    if (!isAvailable) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    // phone number validation
    const phoneValidation = /^\d{10}$/; // Adjust length if needed
    if (!phoneValidation.test(phone_number)) {
      return res.status(400).json({ message: 'Phone number must be 10 digits (numbers only).' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const result = await addUser({
      name,
      email,
      phone_number,
      password: hashedPassword,
      role: 'customer',
    });

    if (result.user_id) {
      res.status(201).json({ message: 'New user registered.', result });
    } else {
      res.status(400).json({ message: 'Failed to register user.' });
    }

  } catch (error) {
    console.error('Error in register:', error.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const login = async (req, res) => {
  try {
    const {email, password} = req.body;

  const data = await getUserByEmail(email);
  if (!data) {
    return res.status(401).json({ message: 'User not found' });
  }

  // compares hashed password
  const isMatch = await bcrypt.compare(password, data.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const token = jwt.sign(
    { id: data.id, email: data.email, role: data.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({
    message: 'Login successful',
    token,
    user: { id: data.id, name: data.name, email: data.email, phone_number: data.phone_number, registration_time: data.registration_time, role: data.role }
  });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const deleteUserResult = await deleteUserById(userId);
    if (deleteUserResult) {
      res.status(200).json({ message: 'User deleted successfully.' });
    } else {
      res.status(404).json({ message: 'User not found.' });
    }
  } catch (error) {
    console.error('Error in deleteUser:', error.message); // Log the error
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export {getUser, getUserById, updateUser, login, register, deleteUser};