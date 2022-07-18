const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
// const dateFormat = require("../utils/dateFormat");

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
      // get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'reaction' }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// reactionCount.virtual("reaction").get(function () {
//   return this.reaction.length;
// });

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
