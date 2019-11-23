const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const saver = require("../database/index.js");

const getReposByUsername = require('../helpers/github.js')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // takes the github username
  var input = Object.keys(req.body)[0];
  console.log("Input was received:", input);

  getReposByUsername.getReposByUsername(input, (err, data) => {
    // manipulate data and get what i want
    if (err) {
      res.status(400).send(err);
    } else {
      let userInfo = data.map(item => {
        return {
          fullName: item.full_name,
          owner_id: item.owner.id,
          private: item.private,
          URL: item.html_url,
          description: item.description
        }
      })

      for ( var i = 0; i< userInfo.length; i++) {
        //console.log(userInfo[i]);

        saver.save(userInfo[i], (err, data) => {
          if(err){
            res.send(err);
          }
            res.send("Success");
        }
        );
      }

    }
    //invoke save function and save it to db

  });

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

