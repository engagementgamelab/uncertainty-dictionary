/**
 * The Uncertainty Dictionary 
 * 
 * ContributorsPage page Model
 * @module index
 * @class index
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * index model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var ContributorsPage = new keystone.List('ContributorsPage', 
	{
		label: 'ContributorsPage Page',
		singular: 'ContributorsPage Page',
		track: true,
		nodelete: true
	});

/**
 * Model Fields
 * @main ContributorsPage
 */
ContributorsPage.add({
	intro: { type: Types.Markdown, label: "Intro Text",  initial: true, required: true },
	
	createdAt: { type: Date, default: Date.now, noedit: true, hidden: true }
});

/**
 * Model Registration
 */
ContributorsPage.defaultSort = '-createdAt';
ContributorsPage.defaultColumns = 'updatedAt';
ContributorsPage.register();
