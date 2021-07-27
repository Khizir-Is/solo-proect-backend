const { Router } = require("express");

const router = Router();
const CategoryRouter = require("./category.route");
const RecipeRouter = require("./recipe.route");

router.use(CategoryRouter);
router.use(RecipeRouter);

module.exports = router;
