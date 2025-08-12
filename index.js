import express from "express";
import cors from "cors";
import { getallfiles, getProfileById } from "./Controlls/profilescontrolls.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", getallfiles);
app.get("/profiles/:id", getProfileById);

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
