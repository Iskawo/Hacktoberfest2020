const ms = require("ms");

function sendTime(milliseconds) {
    return ms(milliseconds, { long: true } );
}

module.exports = sendTime(...args);
