const request = require('request');
const config = require('../config.js');

//takes in a user name and callback
let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function(err, res, body) {
    console.log('Getting stuffs from Github')
    let output = JSON.parse(body);
    if (err) {
      callback(err);
    } else{
      callback(null, output);
    }
    //console.log(output);
  })

}



module.exports.getReposByUsername = getReposByUsername;