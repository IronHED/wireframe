const mongoose = require('mongoose');

const PlayerProfileSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'player'
  },
  team: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  history: [
    {
      tournament: {
        type: String,
        required: true
      },
      team: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      year: {
        type: Date,
        required: true
      },
      description: {
        type: String
      }
    }
  ],
  results: [
    {
      tournament: {
        type: String,
        required: true
      },
      placing: {
        type: String,
        required: true
      },
      venue: {
        type: String,
        required: true
      },
      resultDate: {
        type: Date,
        required: true
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = PlayerProfile = mongoose.model('playerProfile', PlayerProfileSchema);
