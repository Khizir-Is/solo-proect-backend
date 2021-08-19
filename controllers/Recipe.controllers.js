const mongoose = require("mongoose")
const Recipe = require("../models/Recipe.model");

module.exports.recipesController = {
  getAllRecipes: async (req, res) => {
    try {
      const recipe = await Recipe.find();
      return res.json(recipe);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getCategoryRecipe: async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
      const recipes = await Recipe.aggregate([{ $match: { categoryId: mongoose.Types.ObjectId(id) } }, { $sample: { size: 1 } }])
      return res.json(recipes);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },


  addRecipe: async (req, res) => {
    const { name, compound, calories, description, img, categoryId } = req.body;
    if (!name) {
      return res.status(400).json({
        error: "Укажите название рецепта",
      });
    }
    if (!compound) {
      return res.status(400).json({
        error: "Укажите название состава",
      });
    }
    if (!calories) {
      return res.status(400).json({
        error: "Укажите количество калории",
      });
    }
    if (!description) {
      return res.status(400).json({
        error: "Укажите название описании",
      });
    }
    if (!img) {
      return res.status(400).json({
        error: "Укажите ссылку на картинку",
      });
    }

    if (!categoryId) {
      return res.status(400).json({
        error: "Укажите Id",
      });
    }
    try {
      const recipe = await new Recipe({
        name,
        compound,
        calories,
        description,
        img,
        categoryId,
      });
      await recipe.save();
      return res.json(recipe);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  deleteRecipe: async (req, res) => {
    const { id } = req.params;

    try {
      const recipe = await Recipe.findByIdAndRemove(id);

      if (!recipe) {
        return res.status(400).json({
          error: "Рецепт не удалось удалить",
        });
      }
      return res.json({
        message: "Рецепт успешно удален",
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  changeRecipe: async (req, res) => {
    const { name, compound, calories, description, img, categoryId } = req.body;
    const { id } = req.params;

    if (!name) {
      return res.status(400).json({
        error: "Укажите наз-е рецепта",
      });
    }

    if (!compound) {
      return res.status(400).json({
        error: "Укажите название состава.",
      });
    }

    if (!calories) {
      return res.status(400).json({
        error: "Укажите количество калории.",
      });
    }

    if (!description) {
      return res.status(400).json({
        error: "Укажите название описании",
      });
    }

    if (!img) {
      return res.status(400).json({
        error: "Укажите ссылку на картинку",
      });
    }

    if (!categoryId) {
      return res.status(400).json({
        error: "Укажите Id",
      });
    }

    try {
      const recipe = await Recipe.findByIdAndUpdate(
        id,
        { name, compound, calories, description, img, categoryId },
        { new: true }
      );

      if (!recipe) {
        return res.status(400).json({
          error: "Не удалось изменить данные",
        });
      }
      return res.json(recipe);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
