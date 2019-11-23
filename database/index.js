const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });

//define schema
let repoSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  fullName: String,
  owner_id: Number,
  private: Boolean,
  URL: String,
  description: String
});

// compiling our schema
let Repo = mongoose.model('UserList', repoSchema);

// function to save schema into database
let save = (data, callback) => {
  let baby = new Repo(data);
  console.log(baby);

  baby.save(function (err){
    if (err) {
      callback(err);
    }
  });

}

module.exports.save = save;