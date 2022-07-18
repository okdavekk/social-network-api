const User = require("../models/User");

const userController = {
  getAllUsers(req, res) {
    User.find()
      .select("-_v")
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getASingleUserByID(req, res) {
    User.findOne({ _id: req.params.userID })
      // .select("-_v")
      // .populate("friends")
      // .populate("thoughts")
      .then((userData) => {
        console.log(userData);
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  createAUser(req, res) {
    User.create(req.body)
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  updateAUserByID(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.userID },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        consoloe.log(err);
        res.status(500).json(err);
      });
  },
  deleteAUserByID(req, res) {
    User.findOneAndDelete({ _id: req.params.userID })
      .then(() => {
        res.json({ message: "Deleted yo" });
      })
      .catch((err) => {
        consoloe.log(err);
        res.status(500).json(err);
      });
  },
  addAFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendID } },
      { new: true }
    )
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        consoloe.log(err);
        res.status(500).json(err);
      });
  },
  removeAFriendByID(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendID } },
      { new: true }
    )
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        consoloe.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = userController;
