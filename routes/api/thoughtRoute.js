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

router
  .route("/")
  .get(getAllThoughts)

router
  .route("/:userId")
  .post(createAThought)

router
  .route("/:thoughtId")
  .get(getASingleThoughtByID)
  .put(updateAThoughtByID)
  .delete(deleteAThoughtByID);

router
  .route("/:thoughtId/reactions")
  .post(addAReactionByID);

router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(removeAReactionByID);


module.exports = router;
