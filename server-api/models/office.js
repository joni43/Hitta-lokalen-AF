const mongoose = require('mongoose');

const officeSchema = mongoose.Schema({
  title: String,
  areaTypes: [
    {
      id: Number,
      title: String
    }
  ],
  floors: [
    {
      id: Number,
      title: String,
      width: Number,
      height: Number,
      areas: [
        {
          areaTypeId: Number,
          svgPath: String
        }
      ],
      rooms: [
        {
          id: String,
          svgPath: String
        }
      ]
    }
  ]
});

module.exports = mongoose.model('Office', officeSchema);
