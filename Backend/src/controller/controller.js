const User = require("../model/details");

exports.insertDetails = (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    zipcode,
    address,
    email,
    message
  } = req.body;

  console.log(req.body);
 
  const list = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    zipcode: zipcode,
    message: message,
    address: address
  });

  list.save()
  .then(result => {
    res.status(200).json({
      status: 'SUCCESS',
      data: result
    })
  })
  .catch(err => {
    res.json({
      status: 'FAILED',
      msg: err
    })
  })
};

exports.getDetails = (req, res) => {
  User.find()
    .then((result) => {
      res.status(200).json({
        result: result
      })
    })
    .catch((err) => {
      res.json({
        status: 'FAILED',
        msg: err
      })
    })
};
