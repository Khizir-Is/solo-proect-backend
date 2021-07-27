const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getAllCategory: async (req, res) => {
    try {
      const category = await Category.find();
      return res.json(category);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  addCategory: async (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        error: "Укажите название категории",
      });
    }
    try {
      const category = await new Category({
        name,
      });
      await category.save();
      return res.json(category);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  deleteCategory: async (req, res) => {
    const { id } = req.params;
    try {
      const category = await Category.findByIdAndRemove(id);
      if (!category) {
        return res.status(400).json({
          error: "Категории не удалось удалить",
        });
      }
      return res.json({
        message: "Каталог успешно удален",
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
