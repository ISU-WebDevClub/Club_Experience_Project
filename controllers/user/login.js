const express = require('express');
const router = express.Router();

//login route
router.get('/login.html',  (req, res) => {

    res.render("user/login", req.decoded); 

});



module.exports = router;