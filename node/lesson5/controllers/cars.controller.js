const {carService} = require('../services')

let status = 200

module.exports = {
  fetchAll: async (req, res) => {
    try {
      const cars = await carService.findAll();

      res.json(cars);
    } catch (e) {
      res.json(e.message)
    }
  },

  create: async (req, res) => {
    try {
      const car = await carService.createCar(req.body);

      res.status(status).json(car);
    } catch (e) {
      res.json(e.message)
    }
  },

  findWithFilter: async (req, res) => {
    try {
      const car = await carService.getWithFilter();

      res.json(car);
    } catch (e) {
      res.json(e.message)
    }
  }
}
