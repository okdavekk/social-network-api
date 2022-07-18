const Thought = require("../models/Thought");

const thoughtController = {
  createAThought(req, res) {
    Thought.create(req.body)
      .then((thoughtData) => {
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getAllThoughts(req, res) {
    Thought.find()
      .sort({ createdAt: -1 })
      .then((thoughtData) => {
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getASingleThoughtByID(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thoughtData) => {
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateAThoughtByID(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughtData) => {
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteAThoughtByID(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then(() => {
        res.json({ message: "Deleted yo" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // TODO: Get me Working
  addAReactionByID(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Get me Working
  removeAReactionByID(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = thoughtController;
