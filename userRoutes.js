const express = require("express");
const router = express.Router();

const users = require("../data/users");


// GET ALL USERS

router.get("/", (req, res) => {
  res.json(users);
});


// GET USER BY ID

router.get("/:id", (req, res) => {
  const user = users.find(
    (u) => u.id === parseInt(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
});


// CREATE USER

router.post("/", (req, res) => {
  const { name, email, age } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    email,
    age
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});


// UPDATE USER

router.put("/:id", (req, res) => {
  const user = users.find(
    (u) => u.id === parseInt(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const { name, email, age } = req.body;

  user.name = name || user.name;
  user.email = email || user.email;
  user.age = age || user.age;

  res.json({
    message: "User updated successfully",
    user
  });
});


// DELETE USER

router.delete("/:id", (req, res) => {
  const index = users.findIndex(
    (u) => u.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  users.splice(index, 1);

  res.json({
    message: "User deleted successfully"
  });
});

module.exports = router;