const bcrypt = require("bcryptjs");
const prisma = require("../config/prisma");
const { generateToken } = require("../config/jwt");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { username, email, password: hashedPassword },
    });
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "User already exists or invalid data" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: "Invalid password" });

    const token = generateToken(user.id);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { register, login };
