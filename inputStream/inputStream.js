function inputStream () {
	
    	process.stdin.resume();
		process.stdin.setEncoding('utf8');
		
		process.stdin.on('data', function(chunk) {
		  
			chunk = chunk.replace(/[\r|\n]/g, '');

			switch (chunk) {
				case 'deploy': 
					console.log('deploy starting ...');
				break;
			};
		  
		});
		
		process.stdin.on('end', function() {
		  process.stdout.write('end');
		});
	
    
}

exports.inputStream = inputStream;
