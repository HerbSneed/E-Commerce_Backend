const router = require('express').Router();
const { Category, Product } = require('../../models');

//Get all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categoryData);
  } catch (err) {
    res.json(err);
  }
});

//Get one category
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category data found with that id' });
      return;
    }
    res.json(categoryData);
  } catch (err) {
    res.json(err);
  }
});

// create a category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(
      {
        category_name: req.body.category_name,
      },
      res
    );
    res.json(newCategory);
  } catch (err) {
    res.json(err);
  }
});

// update a category by its `id` value
router.put('/:category_id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          category_id: req.params.category_id,
        },
      },
      res
    );

    res.json(updatedCategory);
  } catch (err) {
    res.json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy(
      {
        where: {
          category_id: req.params.id,
        },
      },
      res
    );
    res.json(deletedCategory);
    console.log(deletedCategory);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
