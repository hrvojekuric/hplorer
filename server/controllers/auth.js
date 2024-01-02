import { db } from "../connect.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE fullName = ?";

  db.query(q, [req.body.fullName], (err, data) => {
    if (err) res.status(500).json(err);
    if (data.length) res.status(409).json("User already exists!");
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`fullName`,`email`,`password`) VALUE(?)";
    const values = [req.body.fullName, req.body.email, hashedPassword];

    db.query(q, [values], (err, data) => {
      if (err) res.status(500).json(err);
      res.status(201).json("User created.");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    const checkedPassword = bcryptjs.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkedPassword)
      return res.status(400).json("Email or password wrong!");

    const token = jwt.sign({ id: data[0].id }, "secret");

    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out.");
};
