const Thought = require("../models/Thought");


const thoughtController = {
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
    Thought.findOne({ _id: req.params.thoughtID })
    .then((thoughtData) => {
        res.json(thoughtData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
  },

  createAThought(req, res) {

  },

  updateAThoughtByID(req, res) {

  },

  deleteAThoughtByID(req, res) {

  },

  addAReactionByID(req, res) {

  },

  removeAReactionByID(req, res) {

  },

};

module.exports = thoughtController;