import {addUser, findUserById, listAllUsers, putUserById, deleteUserById, getUserByEmail, getEmailAvailability} from "../models/user-model.js";
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

/*const postUser = async (req, res) => { // in postman, only adding raw data works on this
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    console.log('Form Data:', req.body); // Log form data
    const result = await addUser(req.body);
    if (result.user_id) {
      res.status(201);
      res.json({ message: 'New user added.', result });
    } else {
      res.status(400).json({ message: 'Failed to add user.' });
    }
  } catch (error) {
    console.error('Error in postUser:', error.message); // Log the error message
  };
};*/

const putUser = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const updateUser = await putUserById(req.body, req.params.id);
    if (updateUser) {
      res.status(200).json({message: 'User item updated.', updateUser})
    } else {
      res.sendStatus(404);
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

const register = async (req, res) => {
  try {
    const { name, email, phone_number, password, confirmPassword } = req.body;

    if (!name || !email || !phone_number || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    const isAvailable = await getEmailAvailability(email);
    if (!isAvailable) {
      return res.status(400).json({ message: 'Email already in use.' });
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

export {getUser, getUserById, putUser, deleteUser, login, register};