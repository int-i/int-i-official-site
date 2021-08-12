//참고페이지 : https://supdev.tistory.com/37 (미완성)
var Question = require('../models/question');
var Answer = require('../models/answer');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    Board.find({}, function (err, board) {
        //res.render('index', { title: 'Express', board: board }); 프론트
    });
});
 
/* Write board page */
router.get('/write', function(req, res, next) {
    //res.render('write', { title: '글쓰기' }); 원래는 글쓰기 버튼을 누르면 글쓰기 화면으로 넘어감.
});
 
/* question insert mongo */
router.post('/question/write', function (req, res) {
    var board = new Question();
    board.title = req.body.title;
    board.contents = req.body.contents;
    board.author = req.body.author; 
 
    board.save(function (err) {
        if(err){
            console.log(err);
            res.redirect('/');
        }
        res.redirect('/');
    });
});

/* answer insert mongo*/
router.post('/answer/write', function (req, res){
    var comment = new Answer();
    comment.title = req.body.contents;
    comment.contents = req.body.author;
    comment.author = req.body.author;

    Board.findOneAndUpdate({_id : req.body.id}, { $push: { comments : comment}}, function (err, board) {
        if(err){
            console.log(err);
            res.redirect('/');
        }
        res.redirect('/board/'+req.body.id);
    });
});

module.exports = router;