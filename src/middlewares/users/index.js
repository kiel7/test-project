import UsersDB from '../../models/users.js';

export const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await UsersDB.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
  next();
};