const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

//define schema
let repoSchema = new mongoose.Schema({
  fullName : String,
  owner_id : Number,
  private : Boolean,
  URL : String,
  description : String
});

// compiling our schema
let Repo = mongoose.model('UserList', repoSchema);

// function to save schema into database
let save = (err, data) => {
  if (err) {
    return console.log(err);
  } else {
    console.log(data);
    // filteres the user info
    let userInfo = new Repo( data.map(item) => {return })

    //saves the user information
    userInfo.save()
  }
}

module.exports.save = save;