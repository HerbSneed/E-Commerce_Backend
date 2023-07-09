const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// get all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: { model: Product },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one tag
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: { model: Product },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag data found with that id' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create one tag
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const newTag = await Tag.create(
      {
        tag_name: req.body.tag_name,
      },
      res
    );
    res.json(newTag);
  } catch (err) {
    res.json(err);
  }
});

// update a tag by tag id
router.put('/:tag_id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          tag_id: req.params.tag_id,
        },
      },
      res
    );
    res.json(updatedTag);
  } catch (err) {
    res.json(err);
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        tag_id: req.params.id,
      },
    });
    res.json(deletedTag);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
