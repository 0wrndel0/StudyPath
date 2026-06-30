import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register = async (req, res) => {
  const { nome, email, senha } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "Usuário já existe" });
  }

  const senhaHash = await bcrypt.hash(senha, 8);

  const user = await User.create({
    nome,
    email,
    senha: senhaHash
  });

  return res.status(201).json({
    message: "Usuário criado",
    userId: user._id
  });
};

export const login = async (req, res) => {
  const { email, senha } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const senhaOk = await bcrypt.compare(senha, user.senha);

  if (!senhaOk) {
    return res.status(401).json({ message: "Senha inválida" });
  }

  const token = jwt.sign(
    { id: user._id, email: user.email },
    "segredo_super_forte",
    { expiresIn: "1h" }
  );

  return res.json({ token });
};