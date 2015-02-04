/**
 * RegExp cache
 *
 * @type Object
 */
const REGEX = {
	body: /POST|PUT|PATCH/i,
	body_split: /&|=/,
	collection: /(.*)(\/.*)$/,
	encode_form: /application\/x-www-form-urlencoded/,
	encode_json: /application\/json/,
	get_rewrite: /HEAD|OPTIONS/i,
	hypermedia: /[a-zA-Z]+_(guid|uuid|id|url|uri)$/,
	id: /^(_id|id)$/i,
	leading: /.*\//,
	modify: /DELETE|PATCH|POST|PUT/,
	scheme: /^(\w+\:\/\/)|\//,
	trailing: /_.*$/,
	trailing_s: /s$/,
	trailing_slash: /\/$/,
	trailing_y: /y$/
};