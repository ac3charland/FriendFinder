var friends = require("../data/friends");


module.exports = function(app) {
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newfriend = req.body;
        console.log("Adding friend...");

        console.log(newfriend);

        friends.array.push(newfriend);

        res.end();
    });

    app.get("/api/friends", function (req, res) {
        return res.json(friends.array);
    });
}