const { Router } = require("express");

const router = Router();
const CategoryRouter = require("./Category.route");
const RecipeRouter = require("./Recipe.route");

router.use(CategoryRouter);
router.use(RecipeRouter);

module.exports = router;
