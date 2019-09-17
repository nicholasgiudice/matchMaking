const express = require("express");
const Player = require("./models/player");

const routes = express.Router();

routes.post("/match", async function(req, res) {
  var player = await Player.create({ name: req.body.summonerName });
  return res.status(201).json(player);
});

routes.get("/match", async function(req, res) {
  //var players = await Player.find({});
  //return res.json(players);

  var query = Player.find({});

  query.exec(function(err, docs) {
    return res.json(docs);
  });
  // query.then(
  //   function(result) {
  //     return res.json(result);
  //   },
  //   function(error) {}
  // );
});

module.exports = routes;
