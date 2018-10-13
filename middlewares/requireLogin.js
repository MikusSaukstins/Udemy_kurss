module.exports = (req, res, next) => {
  if(!req.user) {
    return res.stauts(401).send({error: 'You must log in!'});
  }

  next();
};
