const creatingUser = (error, req, res) => {
  console.log(error);
  switch (res.status) {
    case 201:
      json({
        message: 'Handling POST requests to /users'
      });
    case res.status(500):
      res.send({ error: 'boo:(' });
  }
};

module.exports = creatingUser;
