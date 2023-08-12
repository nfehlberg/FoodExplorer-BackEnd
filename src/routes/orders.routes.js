const { Router } = require("express");

const ordersController = require("../controllers/OrdersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticatedUser");
const ensureAdmin = require("../middlewares/ensureAdmin");

const cartsRoutes = Router();

const cartsController = new ordersController();

cartsRoutes.use(ensureAuthenticated);

cartsRoutes.post("/", cartsController.create);
cartsRoutes.get("/:id", cartsController.show);
cartsRoutes.get("/",ensureAdmin, cartsController.index);
cartsRoutes.delete("/:id", cartsController.delete);
cartsRoutes.put("/", cartsController.update);


module.exports = cartsRoutes;