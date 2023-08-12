const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const DishesController = require("../controllers/DishesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticatedUser");
const ensureAdmin = require("../middlewares/ensureAdmin");

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const dishesController = new DishesController();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.post("/", ensureAdmin, upload.single("image"), dishesController.create);
dishesRoutes.get("/", dishesController.index);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.put("/:id", ensureAdmin, upload.single("image"), dishesController.update);
dishesRoutes.delete("/:id", ensureAdmin, dishesController.delete);

module.exports = dishesRoutes;