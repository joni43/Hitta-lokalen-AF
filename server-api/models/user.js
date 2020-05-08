const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
  //_id: mongoose.Schema.Types.ObjectId,
  id: { type: String, required: true },
  officeID: { type: ObjectId },
  floorID: { type: Number }
});

module.exports = mongoose.model('user', userSchema);
