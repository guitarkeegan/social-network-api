const router = require('express').Router();
const { builtinModules } = require('module');
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/userController');

// /api/thoughts
router.route('api/thoughts').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('api/thoughts/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('api/thoughts/:thoughtId/reations').post(createReaction).delete(deleteReaction);

module.exports = router;