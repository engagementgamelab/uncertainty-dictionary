var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contributor Model
 * ==========
 */

var Contributor = new keystone.List('Contributor');

Contributor.add({
	
	name: { type: Types.Name, required: true, initial: true, index: true },
	bio: { type: Types.Markdown, required: true, initial: true },
	photo: { type: Types.CloudinaryImage, folder: 'uncertainty-dictionary', autoCleanup: true },
	isPi: { type: Boolean, label: 'Is PI?' },
	website: { type: Types.Url },
	twitter: { type: String, label: "Twitter Handle" }
	
});

// Provide access to Keystone
Contributor.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
 * Registration
 */

Contributor.defaultColumns = 'name, email, isAdmin';
Contributor.register();
