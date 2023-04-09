const express = require('express');
const router = express.Router();
// Import controller for user
const {createUser,getUserById,updateUserById,deleteUserById} = require('../controllers/user.controller');

router.post('/',createUser);
router.get('/:id',getUserById);
router.put('/:id',updateUserById);
router.delete('/:id',deleteUserById);

module.exports = router;
