const User = require('../models/User.sample');

const UserController = {};

/**
 * Get all users
 */
UserController.fetchAll = (req, res) => {
    res.send('GET /api/v1/users');
};

/**
 * Find user by id
 */
UserController.fetch = (req, res) => {
    res.send(`GET /api/v1/users/${req.params.id}`);
};

/**
 * Create new user
 */
UserController.create = async (req, res) => {
    res.send('POST /api/v1/users');
};

/**
 * Update user
 */
UserController.update = (req, res) => {
    res.send(`PATCH /api/v1/users/${req.params.id}`);
};

/**
 * Delete user
 */
UserController.delete = (req, res) => {
    res.send(`DELETE /api/v1/users/${req.params.id}`);
};

module.exports = UserController;