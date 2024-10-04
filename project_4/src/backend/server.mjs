import express from "express";
import fs from "fs";
import cors from "cors";
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Endpoint per ottenere i dati
app.get("/api/users", (req, res) => {
  const data = fs.readFileSync("database.json", "utf8");
  res.json(JSON.parse(data).users);
  console.log("Dati recuperati");
});

// Endpoint per aggiungere un nuovo utente
app.post("/api/users", (req, res) => {
  const data = fs.readFileSync("database.json", "utf8");
  const db = JSON.parse(data);
  const newUser = req.body;
  db.users.push(newUser);
  fs.writeFileSync("database.json", JSON.stringify(db, null, 2));
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
