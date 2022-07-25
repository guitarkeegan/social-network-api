const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('api/thoughts').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('api/thoughts/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('api/thoughts/:thoughtId/reations').post(addReaction).delete(removeReaction);

module.exports = router;