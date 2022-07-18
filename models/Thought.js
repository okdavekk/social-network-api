const { Schema, model } = require("mongoose");
// TODO: is reactionSchema needed?
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormater.js");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      Required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (reformattedTime) => dateFormat(reformattedTime),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// TODO: Get me Working

// reactionCount.virtual("reaction").get(function () {
//   return this.reaction.length;
// });

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
