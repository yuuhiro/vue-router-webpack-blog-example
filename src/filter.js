const filters = {
	nl2br(value) {
		return value.replace(/[\n\r]/g, "<br />");
	},
	escapeHtml(value) {
		var TABLE_FOR_ESCAPE_HTML = {
			"&": "&amp;",
			"\"": "&quot;",
			"<": "&lt;",
			">": "&gt;"
		};
		return value.replace(/[&"<>]/g, function(match) {
			return TABLE_FOR_ESCAPE_HTML[match];
		});
	}
};

export default filters