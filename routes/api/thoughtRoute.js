const router = require("express").Router();

const {
  getAllThoughts,
  getASingleThoughtByID,
  createAThought,
  updateAThoughtByID,
  deleteAThoughtByID,
  addAReactionByID,
  removeAReactionByID,
} = require("../../controllers/thoughtsController");

router.route("/").get(getAllThoughts).post(createAThought);

router
  .route("/:thoughtID")
  .get(getASingleThoughtByID)
  .put(updateAThoughtByID)
  .delete(deleteAThoughtByID);

router.route("/:thoughtID/reactions").post(addAReactionByID);

router.route("/:thoughtId/reactions/reactionId").delete(removeAReactionByID);

module.exports = router;
