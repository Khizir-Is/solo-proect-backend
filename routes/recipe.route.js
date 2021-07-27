const { Router } = require("express");

const { recipesController } = require("../controllers/Recipe.controllers");

const router = Router();

router.get("/recipe", recipesController.getAllRecipe);
router.post("/category/:id/recipe", recipesController.addRecipe);
router.delete("/recipe/:id", recipesController.deleteRecipe);
router.patch("/recipe/:id", recipesController.changeRecipe);

module.exports = router;
