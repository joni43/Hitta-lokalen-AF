const express = require('express');
const router = express.Router();

const patchUsers = res => {
  res.status(200).json({
    message: 'user deleted',
    orderId: res.params.userID
  });
};

module.exports = patchUsers;
