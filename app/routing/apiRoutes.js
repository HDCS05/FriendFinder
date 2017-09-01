
var friendData = require("../data/friend");
var vnamematch = ""
var vimage = ""
var ofriends = "";
var ocurrfriend = "";

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
	 res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
		friendData.push(req.body);
		ofriends = friendData;
		ocurrfriend = req.body;
		res.json(true);
		//fColorMatch();
		//console.log(req.body);
		//res.json([vnamematch,vimage]);
  });
 
};

function fColorMatch() {
	var vtotaldif = 0;
	var vnum = 0;
	//var ofriends = friendData;
	var vnumcontrol = 0;
	console.log(ofriends);
	console.log(ocurrfriend);
	for (var i = 0 in ofriends) {
		for (var j = 0; j < 10; j++ ) {
			vnum = ocurrfriend.scores[j] - ofriends.scores[j];
			vtotaldif += Math.abs(vnum);
		}
		if (i == 0) {
			vnumcontrol = vtotaldif;
			vnamematch = ofriends.name;
			vimage = ofriends.photo;
		}	else {
				if (vtotaldif < vnumcontrol) {
					vnumcontrol = vtotaldif;
					vnamematch = ofriends.name;
					vimage = ofriends.photo;	
				}
			}
	}
};