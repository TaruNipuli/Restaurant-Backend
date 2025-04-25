import {addUser, findUserById, listAllUsers, putUserById, deleteUserById} from "../models/user-model.js";

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

const postUser = async (req, res) => { // in postman, only adding raw data works on this
  try {
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
};

const putUser = async (req, res) => {
    // not implemented in this example, this is future homework
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

    // Delete the user
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

export {getUser, getUserById, postUser, putUser, deleteUser};