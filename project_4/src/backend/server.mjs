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
  // console.log("Dati recuperati");
});

// Endpoint per aggiungere un nuovo utente
app.post("/api/users", (req, res) => {
  try {
    const {
      username,
      password,
      email,
      isPro,
      isAdmin,
      job,
      image,
      description,
      program,
      project,
      someExperience,
      price,
      luogo,
      transfert,
      contact,
      general,
      reviews,
      comments,
    } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const data = fs.readFileSync("database.json", "utf8");
    const db = JSON.parse(data);

    console.log(db.users);

    const newUser = {
      id: db.users.length + 1,
      username,
      password,
      email,
      isPro,
      isAdmin,
      job,
      image,
      description,
      program,
      project,
      someExperience,
      price,
      luogo,
      transfert,
      contact,
      general,
      reviews,
      comments,
    };

    db.users.push(newUser);

    fs.writeFileSync("database.json", JSON.stringify(db, null, 2));
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Failed to write file:", error);
  }
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
