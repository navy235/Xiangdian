/**
 * Created by hshen on 5/26/2015.
 */
var crypto = require('crypto')

var Crypto = {
    hashCrypto: function (content) {
        return crypto.createHmac('sha1', this.getPrivateKey())
            .update(content)
            .digest('hex');
    },
    getPrivateKey: function () {
        return "qhe9gfRxWIrJVt2bXP9ltwzup1hWnvYEQ";
    }
}
module.exports = Crypto;