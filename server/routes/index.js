var express = require('express');
var router = express.Router();
var UserModel = require('../models/UseModel')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
router.post('/user/regist', (req, res) => {
    var username = req.body.username;
    var psw = req.body.psw;
    var user = new UserModel();
    user.username = username;
    user.psw = psw;
    user.save((err) => {
        var result = {
            code: 1
        }
        if (err) {
            result.code = -100;
            result.message = '注册失败'
        }
        res.send(JSON.stringify(result));
    // res.json(result)
    })
})

router.post('/user/login', (req, res, next) => {
    UserModel.find({
        username: req.body.username,
        psw: req.body.psw
    }, (err, docs) => {
        var result = {
            code: 1
        }
        if (err || docs.length == 0) {
            result.code = -99;
            result.message = '登陆失败'
        } else {
            req.session.username = req.query.username;
            console.log(req.session)
        }
        res.send(JSON.stringify(result));

    })
})

module.exports = router;
