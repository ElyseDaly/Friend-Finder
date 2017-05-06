// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all 
// possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

var friendData = require('../data/friends.js');
var path = require('path');


var totalDifference = 0;

module.exports = function(app) {
	//GET route
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    //POST route
    app.post('/api/friends', function(req, res) {

        var greatMatch = {
            name: "",
            image: "",
            matchDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userImage = userData.image;
        var userScores = userData.scores;

        var totalDifference = 0;

        //COMPATIBILITY LOGIC
        for (var i = 0; i < [friends].length - 1; i++) {

            console.log(friends[i].name);

            totalDifference = 0;

            for (var j = 0; j < 10; j++) {

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= greatMatch.friendDifference) {

                    greatMatch.name = friends[i].name;
                    greatMatch.photo = friends[i].photo;
                    greatMatch.matchDifference = totalDifference;
                }
            }
        }

        friends.push(userData);

        res.json(greatMatch);
    });
};
