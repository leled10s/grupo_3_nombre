function guestMiddleware(req, res, next){
    req.session.loggedUser?res.redirect("/users/profile"):next()
} 
module.exports = guestMiddleware;