import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Running on http://localhost:${port}`));

export function getMessage(): string {
  return "Hallo von der Softwarequalität API.";
}

app.get("/", (req, res) => {
  res.send({ message: getMessage() });
});
