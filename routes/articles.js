const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/articles');

/*---------- Public Routes ----------*/
router.get('/topnews', articleCtrl.getTopNews)

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/', articleCtrl.create)
router.post('/search/:id', articleCtrl.search)
router.get('/:id', checkAuth, articleCtrl.getArticle)
router.put('/:id/addcomment', checkAuth, articleCtrl.addComment)


// we need to have a route that calls a controller function, which uses axios .get with our formData to retrieve articles from the search


// route with controller create function called 

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;