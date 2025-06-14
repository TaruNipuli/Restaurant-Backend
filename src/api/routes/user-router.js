import express from 'express';

import {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
  register
} from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter.route('/').get(getUser); // .post(postUser)

userRouter.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

userRouter.route('/login').post(login); //api/v1/auth/login

userRouter.route('/register').post(register); //api/v1/auth/register

export default userRouter;