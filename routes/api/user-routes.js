const router = require('express').Router();

const {
  addFriend,
  deleteFriend,
  addUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(addUser);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)

  module.exports = router;

