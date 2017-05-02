const twit = require('twit');
const config = require('./config');
var T = new twit(config);


Twitter.post('statuses/update', {status : 'hello world from twitter bot'}, function(err, data, response) {
	console.log(data);
});



