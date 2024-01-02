import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

const port = 8800;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/auth", authRoutes);

app.listen("8800", () =>
  console.log(`server is running on http://localhost:${port}`)
);
