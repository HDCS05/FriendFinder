
var friendData = require("../data/friend");
var vnamematch = "";
var vimage = "";
var ofriends = "";
var ocurrfriend = "";

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
	 res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
		ofriends = friendData;
		friendData.push(req.body);
		ocurrfriend = req.body;
		fColorMatch();
		res.json([true, vnamematch, vimage]);
  });
 
};

function fColorMatch() {
	var vnumcontrol = 0;
	for (var i = 0; i < (ofriends.length - 1); i++) {
		var vtotaldif = 0;
		var vnum = 0;
		for (var j = 0; j < 10; j++ ) {
			vnum = ocurrfriend.scores[j] - ofriends[i].scores[j];
			vtotaldif += Math.abs(vnum);
		}
		if (i == 0) {
			vnumcontrol = vtotaldif;
			vnamematch = ofriends[i].name;
			vimage = ofriends[i].photo;
		}	else {
				if (vtotaldif < vnumcontrol) {
					vnumcontrol = vtotaldif;
					vnamematch = ofriends[i].name;
					vimage = ofriends[i].photo;	
				}
			}
	}
};