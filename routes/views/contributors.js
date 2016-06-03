/**
 * The Uncertainty Dictionary
 * Developed by Engagement Lab, 2016
 * ==============
 * Contributor page view controller.
 *
 * Help: http://keystonejs.com/docs/getting-started/#routesviews-firstview
 *
 * @class Contributor
 * @author 
 *
 * ==========
 */
var keystone = require('keystone'),
    Contributor = keystone.list('Contributor'),
    ContributorsPage = keystone.list('ContributorsPage'),
    _ = require('underscore');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res),
        locals = res.locals;

    // Init locals
    locals.section = 'contributors';

    view.on('init', function(next) {

        var queryPage = ContributorsPage.model.findOne({}, {}, {
            sort: {
                'createdAt': -1
            }
        });
        var queryContribs = Contributor.model.find({});

        queryPage.exec(function(err, resultPage) {
            if (err) throw err;

            locals.intro = resultPage.intro;

            queryContribs.exec(function(err, resultContribs) {
                if (err) throw err;

                locals.contributors = _.where(resultContribs, {isPi: false});
                locals.pis = _.where(resultContribs, {isPi: true});

                next();

            });

        });
    });

    // Render the view
    view.render('contributors');

};
