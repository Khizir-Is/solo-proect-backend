const { Router } = require("express");

const { recipesController } = require("../controllers/Recipe.controllers");

const router = Router();

router.get("/recipes", recipesController.getAllRecipes);
router.get("/category/:id/recipe", recipesController.getCategoryRecipe)
router.post("/category/:id/recipe", recipesController.addRecipe);
router.delete("/recipe/:id", recipesController.deleteRecipe);
router.patch("/recipe/:id", recipesController.changeRecipe);

module.exports = router;
