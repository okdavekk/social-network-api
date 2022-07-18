const router = require("express").Router();

const {
  getAllUsers,
  getASingleUserByID,
  createAUser,
  updateAUserByID,
  deleteAUserByID,
  addAFriend,
  removeAFriendByID,
} = require("../../controllers/usersController");

router
  .route("/")
  .get(getAllUsers)
  .post(createAUser);

router
  .route("/:userID")
  .get(getASingleUserByID)
  .put(updateAUserByID)
  .delete(deleteAUserByID);

router.route("/:userID/friend").post(addAFriend);

router.route("/:userId/friend/friendId").delete(removeAFriendByID);

module.exports = router;
