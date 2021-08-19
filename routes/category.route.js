const { Router } = require("express");

const { categoriesController } = require("../controllers/Category.controllers");

const router = Router();

router.get("/category1", categoriesController.getAllCategory);
router.post("/category", categoriesController.addCategory);
router.delete("/category/:id", categoriesController.deleteCategory);

module.exports = router;
