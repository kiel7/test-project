import { Router } from "express";
import CreateUserValidation from "../validations/userSchemas.js";
import UsersDB from "../models/users.js";
import { getUserById } from "../middlewares/users/index.js";
import { hashPassword } from "../utils/helpers.js";

const router = Router();


// Get all users
router.get("/api/users", async (req, res) => {
    try {
        const users = await UsersDB.findAll(req.attributes = 
            ['user_id', 'username', 'email', 'role_id']
        );
        res.status(200).json(users);
        //res.
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});


// Create a new user
/*router.post("/api/users", CreateUserValidation, async (req, res) => {
    try {
        const { username, email, password, role_id } = req.body;

        // Hash the password before saving
        const hashedPassword = await hashPassword(password);

        const newUser = await UsersDB.create({
            username,
            email,
            password: hashedPassword,
            role_id
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
}); */
// Get a user by ID
router.get("/api/users/:id", getUserById, (req, res) => {  
    res.json(req.user);
});
// Update a user by ID
router.put("/api/users/:id", async (req, res) => {      
    try {
        const { username, email, password, role_id } = req.body;
        const user = await UsersDB.findByPk(req.params.id);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Hash the password if it is provided
        const hashedPassword = password ? await hashPassword(password) : user.password;

        user.username = username || user.username;
        user.email = email || user.email;
        user.password = hashedPassword;
        user.role_id = role_id || user.role_id;

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
});
// Delete a user by ID
router.delete("/api/users/:id", async (req, res) => {               
    try {
        const user = await UsersDB.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await user.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
});

export default router;