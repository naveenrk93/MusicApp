var express = require('express');
var router = express.Router();
var con = require('./database');

/* GET home page. */
router.get('/api/v1/songs', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  con.query("SELECT * FROM songs", function (err, result, fields) {
    if (err) throw err;
    return res.json(result);
  });
});

router.post('/api/v1/playlist', function(req, res, next){

  if(!req.body.user_id)
    res.status(500).json({message: "user_id is not specified"});
  var user_id = req.body.user_id;
  if(!req.body.playlist_name)
    res.status(500).json({message: "playlistname is not specified"});
  var playlist_name = req.body.playlist_name;

  var sql = "INSERT INTO user_playlists (name, userid) values ('"+playlist_name+"', "+user_id+")";

  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    return res.json(result);
  });

})

router.post('/api/v1/playlist/:playlistid', function(req, res, next){

  if(!req.body.playlist)
    return res.json({});

  var sql = "INSERT INTO user_playlists (name, userid) values ('"+playlist_name+"', "+user_id+")";

})

router.get('/api/v1/playlist/:playlistid', function(req, res, next){
  var sql = "SELECT * FROM playlist_songs WHERE playlist_id = "+req.params.playlistid;
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    return res.json(result);
  });
})


module.exports = router;
