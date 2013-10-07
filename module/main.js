define(function( require, exports, module ) {
	var $ = require("jquery");
	var tpl = require("tpl!./templates/main.html");

	$("body").append( tpl() );
});