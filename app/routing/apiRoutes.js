
module.exports = function(app) {
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newfriend = req.body;

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

        console.log(newfriend);

        friends.push(newfriend);

        res.json(newcharacter);
    });

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
}