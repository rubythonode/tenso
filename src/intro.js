( function () {
"use strict";

var turtleio = require( "turtle.io" ),
    SERVER   = "tenso/{{VERSION}}",
    CONFIG   = require( __dirname + "/../config.json" ),
    keigai   = require( "keigai" ),
    util     = keigai.util,
    array    = util.array,
    clone    = util.clone,
    coerce   = util.coerce,
    iterate  = util.iterate,
    json     = util.json,
    merge    = util.merge,
    string   = util.string,
    uuid     = util.uuid,
    session  = require( "express-session" ),
    cookie   = require( "cookie-parser" ),
    lusca    = require( "lusca" ),
    passport = require( "passport" ),
    BasicStrategy    = require( "passport-http" ).BasicStrategy,
    BearerStrategy   = require( "passport-http-bearer" ).Strategy,
    FacebookStrategy = require( "passport-facebook" ).Strategy,
    GoogleStrategy   = require( "passport-google" ).Strategy,
    LinkedInStrategy = require( "passport-linkedin" ).Strategy,
    LocalStrategy    = require( "passport-local" ).Strategy,
    OAuth2Strategy   = require( "passport-oauth2" ).Strategy,
    SAMLStrategy     = require( "passport-saml" ).Strategy,
    TwitterStrategy  = require( "passport-twitter" ).Strategy,
    RedisStore       = require( "connect-redis" )( session ),
    REGEX_HYPERMEDIA = /[a-zA-Z]+_(guid|uuid|id|url|uri)$/,
    REGEX_TRAILING   = /_.*$/,
    REGEX_TRAILING_S = /s$/,
    REGEX_SCHEME     = /^(\w+\:\/\/)|\//,
    REGEX_COLLECTION = /(.*)(\/.*)$/,
    REGEX_MODIFY     = /DELETE|PATCH|POST|PUT/,
    REGEX_GETREWRITE = /HEAD|OPTIONS/i,
    REGEX_BODY       = /POST|PUT|PATCH/i,
    REGEX_FORMENC    = /application\/x-www-form-urlencoded/,
    REGEX_JSONENC    = /application\/json/,
    REGEX_BODY_SPLIT = /&|=/,
    REGEX_LEADING    = /.*\//,
    REGEX_ID         = /^(_id|id)$/i,
    REGEX_TRAIL_SLASH= /\/$/;
