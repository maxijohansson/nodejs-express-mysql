const Instrument = require("../models/instrument.model.js");

// Retrieve all Instruments from the database.
exports.findAll = (req, res) => {
  Instrument.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving instruments."
      });
    else res.send(data);
  });
};