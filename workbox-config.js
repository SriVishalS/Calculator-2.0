module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,md,jpg,json,js,css,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};