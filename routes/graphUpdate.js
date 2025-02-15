var express = require('express');
var router = express.Router();
const graph = require('../data/graph.json');
const vGraph = require('../data/vGraph.json');
const news = require('../data/news.json');

/* GET users listing. */

router.get('/', function (req, res, next) {
  

  let date = new Date();
  let minutes = date.getMinutes();
  // if (minutes > 30) {
  //   minutes -= 30;
  // }
  minutes = minutes % 5;
  // let t = `${hours}:${minutes}`;
  return res.status(200).json({
    i: index,
    gData: graph[index],
    vData: vGraph[index],
    news: news[nIndex],
    ni: nIndex,
    time: minutes,
  });
});

module.exports = router;
