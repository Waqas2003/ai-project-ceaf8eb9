const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: String,
  });

module.exports = mongoose.model('News', newsSchema);
```
This is a basic setup for a professional website for the Pakistan Cricket Team with a beautiful frontend using React and a backend using Node.js/Express. The website has four pages: Home, Players, Schedule, and News. The Players page displays a list of players with their names, roles, and images. The Schedule page displays a list of upcoming matches with their dates, opponents, and venues. The News page displays a list of news articles with their titles and descriptions. The website uses a MongoDB database to store the data for players, schedule, and news.