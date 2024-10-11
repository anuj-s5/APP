const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/punjabnews', { useNewUrlParser: true, useUnifiedTopology: true });

const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});

const News = mongoose.model('News', newsSchema);

app.get('/news', async (req, res) => {
  const news = await News.find();
  res.json(news);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
