'use strict';
const fs = require('fs')
exports.message = function(req, res) {
    var alert = "empty";
    fs.readFile("message.json", "utf-8", (err, data) => {
            if (err) {
                throw err;
            }
            alert = JSON.parse(data);
            res.json(alert);
        }
    )
};
