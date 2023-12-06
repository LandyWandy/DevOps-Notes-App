const pool = require('../db/db'); 

const healthController = {
  livenessCheck: (req, res) => {
    res.status(200).send('OK');
  },

  readinessCheck: async (req, res) => {
    try {
      const response = await pool.query('SELECT 1');
      if (response) {
        res.status(200).send('OK');
      } else {
        res.status(500).send('Database not ready');
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Not ready');
    }
  }
};

module.exports = healthController;