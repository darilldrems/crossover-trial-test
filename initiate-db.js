var sqlite3 = require(sqlite3);

var db = new sqlite3.Database("data/gamedb");

db.serialize(function(){
  //create and add initial data to all db tables

});

db.close();
