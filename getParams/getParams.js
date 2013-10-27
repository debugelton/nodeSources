// print process.argv
function getProgParam () {
	if (process.argv.length > 2) {
		
		return process.argv.slice(2, process.argv.length);
	}
	else {
		return false;
	}
}

exports.getProgParam = getProgParam;