var ajax = {
	get: function(url, callback) {
		request = new XMLHttpRequest();
		request.open('GET', url, true);


		request.onload = function() {
			if (request.status >= 200 && request.status < 400){
				// Success!
				callback(request.responseText);
			} else {
				// We reached our target server, but it returned an error
				callback('The request returned an error');
			}
		};

		request.onerror = function() {
			// There was a connection error of some sort
			callback('Conection error: cannot get request');
		};

		request.send();
	}
};
