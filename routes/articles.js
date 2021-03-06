const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/articles');
const article = require('../models/article');

/*---------- Public Routes ----------*/
router.get('/topnews', articleCtrl.getTopNews)

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/', articleCtrl.create)
router.post('/search/:id', articleCtrl.search)
router.get('/article/comment/:id', checkAuth, articleCtrl.getComment)
router.put('/:id/addreply', checkAuth, articleCtrl.addReply)
router.get('/:id', checkAuth, articleCtrl.getArticle)
router.put('/:id/addcomment', checkAuth, articleCtrl.addComment)


/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;