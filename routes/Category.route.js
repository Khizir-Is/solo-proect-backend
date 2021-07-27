const { Router } = require("express");

const { categoryesController } = require("../controllers/Category.controllers");

const router = Router();

router.get("/category", categoryesController.getAllCategory);
router.post("/category", categoryesController.addCategory);
router.delete("/category/:id", categoryesController.deleteCategory);

module.exports = router;
