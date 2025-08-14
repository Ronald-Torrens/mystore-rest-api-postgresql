const express = require('express');
const router = express.Router();

const CategoriesService = require('../services/categories.service');
const service = new CategoriesService();

const validatorHandler = require('../middleware/validator.handler');
const { createCategorySchema, getCategorySchema, updateCategorySchema } = require('../schemas/categories.schemas');

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.status(200).json(categories)
});

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    };
  }
);

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    };
  }
);

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateCategory = await service.update(id, body);
      res.status(201).json(updateCategory);
    } catch (error) {
      next(error);
    };
  }
);

router.delete('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteCategory = await service.delete(id);
      res.status(200).json(deleteCategory);
    } catch (error) {
      next(error);
    };
  }
);

module.exports = router;
