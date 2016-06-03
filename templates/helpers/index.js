var _ = require('underscore');
var hbs = require('handlebars');

module.exports = function() {

    var _helpers = {};

    /**
     * Local HBS Helpers
     * ===================
     */

    //  ### URL prettifier (remove protocol)
    //
    //  @str: The url
    _helpers.urlPurty = function(str) {
        return str.replace('http://', '').replace('www.', '');
    }


    return _helpers;


};