const withVideos = require("next-videos");

module.exports = {
  env: {
    mongodburl: process.env.MONGODB,
  },
};

module.exports = withVideos();
