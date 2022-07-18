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
  addAReactionByID(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { friends: req.params.thoughtId } },
      { new: true }
    )
      .then((thoughtData) => {
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  removeAReactionByID(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { friends: req.params.thoughtId } },
      { new: true }
    )
      .then((thoughtData) => {
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;
