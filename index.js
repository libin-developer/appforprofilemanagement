import express from "express";
import cors from "cors";
import { getallfiles, getProfileById } from "./Controlls/profilescontrolls.js";

const port = 5000;
const app = express();

app.use(cors({origin: "*"}));
app.use(express.json());

app.get("/", getallfiles);
app.get("/profiles/:id", getProfileById);

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
