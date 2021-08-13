const express = require('express');
const router = express.Router();
const News = require('../models/News');
const util = require('../util');
const flash = require('connect-flash');

// 참고 사이트 : https://www.a-mean-blog.com/ko/blog/Node-JS-%EC%B2%AB%EA%B1%B8%EC%9D%8C/%EA%B2%8C%EC%8B%9C%ED%8C%90-%EB%A7%8C%EB%93%A4%EA%B8%B0/%EA%B2%8C%EC%8B%9C%ED%8C%90-Post-Error-%EC%B2%98%EB%A6%AC

//new
router.get('/new', util.isLoggedin, function(req, res){
    var news = req.flash('news')[0] || {};
    var errors = req.flash('errors')[0] || {};
    res.render('News/new', {news: news, errors:errors});
});

// Index
router.get('/', function(req,res){
    News.find({})
    .populate('author') // id값으로 author을 생성
    .sort('-createdAt')
    .exec(function(err, posts){
        if(err) return res.json(err);
        res.render('news/index', {posts : posts});
    })
})

// create
router.post('/', util.isLoggedin, function(req, res){
    req.body.author = req.user._id; 
    // 로그인으로 생성된 req.user의 _id를 호출해 author에 기록
    News.create(req.body, function(err, news){
        if(err){
            // flash로 'news'키에 'req.body'의 값을 저장
            req.flash('news', req.body);
            req.flash('errors', util.parseError(err));
        }
        res.redirect('/News');
    })
})

//show
router.get('/:username',util.isLoggedin, checkPermission, function(req, res){
    News.findOne({_id:req.params.id})
    .populate('author')
    .exec(function(err, post){
        if(err) return res.json(err);
        res.render('news/show', {news:news});
    })
})

//edit
router.get('/:id/edit', util.isLoggedin, checkPermission, function(req, res){
    var news = req.flash('news')[0]; // flash로 해당 키에 대한 값을 불러온다. 
    var errors = req.flash('errors')[0] || {};

    if(!news){
        News.findOne({_id:req.params.id}, function(err, news){
            if(err) return res.json(err);
            res.render('News/edit', { news : news, errors : errors});
        })
    }
    else{
        post._id = req.params.id;
        res.render('News/edit', {news : news, errors : errors})
    }
})

// update
router.put('/:id', util.isLoggedin, checkPermission, function(req, res){
    req.body.updateAt = Date.now();
    News.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true}, function(err, post){
        if(err){
            req.flash('news', req.body);
            req.flash('errors', util.parseError(err));
            return res.redirect('/news/'+ req.params.id + '/edit');
        }
        res.redirect('/news/'+ req.params.id);
    })
})

//Destroy
router.delete('/:id', util.isLoggedin, checkPermission, function(req, res){
    News.deleteOne({_id:req.params.id}, function(err){
        if(err) return res.json(err);
        res.redirect('/news'+ res.locals.getPostQueryString());
    });
});

module.exports = router;
//ejs 확인하기

//private function
function checkPermission(req, res, next){
    News.findOne({_id:req.params.id}, function(err,news){
        if(err) return res.json(err);
        if(news.author != req.user.id) return util.noPermission(req,res);

        next();
    })
}