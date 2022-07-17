const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectID,
            default: () => Types.ObjectID()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 200
        },
        username: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;