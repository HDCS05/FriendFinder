
var friendData = require("../data/friend");
var vnamematch = ""
var vimage = ""

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
      friendData.push(req.body);
      res.json(true);
      //fColorMatch();
      //res.json(     data in here     );
  });
 
};

// function fColorMatch() {
//   var vtotaldif = 0;
//   var vnum = 0;
//   for (var i = 0; i < friendData.length; i++) {
//     vnum = req.body.scores[i] - friendData.scores[i];

//   }
// };