const router = require('express').Router()

const {
    getAllThoughts,
    getThoughtById,
    updateThought,
    addThought,
    removeThought,
    addReaction,
    removeReaction  
} = require('../../controllers/thought-controller')

router.route('/').get(getAllThoughts).post(addThought)

router.route('/:ThoughtId').get(getThoughtById).put(updateThought).delete(removeThought)

router.route('/:thoughtId/reactions').post(addReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router