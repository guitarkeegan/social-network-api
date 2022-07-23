const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
// TODO: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);



module.exports = router;
