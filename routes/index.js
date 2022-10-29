const express = require('express');

const {
    getUserDataById,
    updateUserAddressById,
    createUser,
    deleteUser
} = require("../controllers")

const router = express.Router()

router.get('/get-user-data/:id', getUserDataById)
router.put('/update-user-adress/:id', updateUserAddressById)
router.get('/create-user', createUser)
router.delete('/delete-user/:id', deleteUser)


module.exports = {
    router
}